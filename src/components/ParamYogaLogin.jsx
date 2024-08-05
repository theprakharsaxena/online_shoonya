import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { SERVER_URI } from '../main';
import { useDyteClient, DyteProvider } from '@dytesdk/react-web-core';
import toast from 'react-hot-toast';
import ProgramsList from '../utils/ProgramsList';
import Meeting from './Meeting';
import Dropdown2 from './Dropdown2';
import ParamyogaLoginDropdown from './ParamyogaLoginDropdown';
import utils from '../styles/utils.module.css';
import styles from '../styles/ApplicationFormPage.module.css';


const ParamYogaLogin = () => {
  // const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [teacherToken, setTeacherToken] = useState('');
  const [teacherAuthToken, setTeacherAuthToken] = useState('');
  const [instructorId, setInstructorId] = useState('');
  const [programId, setProgramId] = useState('');
  const [programName, setProgramName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState('');
  const [meeting, initMeeting] = useDyteClient();
  const [errors, setErrors] = useState({});

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${SERVER_URI}/api/instructor/login`, {
        username,
        password: pass,
      });

      const data = (response?.data || response?.response?.data)  // Axios automatically parses JSON
      console.log(data);

      // Axios does not use response.ok, so check for the status directly
      if (data.status === false) {
        toast.error(data.message)
        throw new Error('Login failed');
      }

      setTeacherToken(data.token);
      setInstructorId(data.instructor_id);
      setIsLoggedIn(true);
      toast.success('LoggedIn successful')
    } catch (e) {
      if (e.response.data.message) {
        toast.error(e.response.data.message);
      }
      console.log(e);
    }
  }

  const joinSessionHandler = async () => {
    try {
      const response = await axios.post(`${SERVER_URI}/api/instructor/join_session`, {
        instructor_id: instructorId,
        programme_id: programId
      }, {
        headers: {
          Authorization: `Bearer ${teacherToken}`
        }
      });

      const data = (response?.data || response?.response?.data)  // Axios automatically parses JSON
      console.log(data);

      // Axios does not use response.ok, so check for the status directly
      if (data.status === false) {
        toast.error(data.message)
        throw new Error('Login failed');
      }

      setTeacherAuthToken(data.auth_token);
      toast.success('session joined')
    } catch (e) {
      if (e.response.data.message) {
        toast.error(e.response.data.message);
      }
      console.log(e);
    }
  }

  useEffect(() => {
    if (teacherAuthToken) {
      initMeeting({
        authToken: teacherAuthToken,
        defaults: {
          audio: false,
          video: false,
        },
      });
    }
  }, [teacherAuthToken]);

  useEffect(() => {
    if (!meeting) {
      return;
    }

    const meetJoinListener = async () => {
      try {
        const response = await axios.post(`${SERVER_URI}/api/instructor/join_session`, {
          instructor_id: instructorId, programme_id: programId,
        }, {
          headers: {
            Authorization: `Bearer ${teacherToken}`,
          },
        });

        const data = (response?.data || response?.response?.data)

        if (data.status === false) {
          console.log(data.status);
          toast.error(data.message)
          return;
        }
        console.log(data);
        setIsJoining(true);
      } catch (e) {
        console.log(e);
        if (e.response.data.message) {
          toast.error(e.response.data.message);
        }
      }
    }

    const meetLeaveListener = async () => {
      try {
        console.log('leaved');
        const response = await axios.post(`${SERVER_URI}/api/instructor/leave_session`, {
          instructor_id: instructorId, programme_id: programId,
        }, {
          headers: {
            Authorization: `Bearer ${teacherToken}`,
          },
        });

        const data = (response?.data || response?.response?.data)

        if (data.status === false) {
          toast.error(data.message)
        }
        setIsJoining(false);
      } catch (e) {
        console.log(e);
        if (e.response.data.message) {
          toast.error(e.response.data.message);
        }
      }
    }
    meeting.self.on("roomJoined", meetJoinListener);
    meeting.self.on("roomLeft", meetLeaveListener);
  }, [meeting]);

  useEffect(() => {
    ProgramsList.map(program => {
      if (program.title === programName) {
        setProgramId(program.id);
      }
    })
  }, [programName]);

  return (
    <div>
      {teacherAuthToken && <DyteProvider value={meeting} fallback={<i>Loading...</i>}>
        <Meeting />
      </DyteProvider>}
      <div className={utils.container}>
        <div className={styles.formSection}>
          {!teacherToken && <>
            <div className={styles.labelInput}>
              <label htmlFor="username"><p className={utils.s14}>Username</p></label>
              <input type="text" name='username' placeholder='johnsnow' onChange={(e) => setUsername(e.target.value)} />
              {/* {errors?.username && <p className={`${`${utils.errors} ${utils.s14}`} ${styles.errors_margin}`}>{errors?.username}</p>} */}
            </div>
            <div className={styles.labelInput}>
              <label htmlFor="password"><p className={utils.s14}>Password</p></label>
              <input type="password" name='password' placeholder='' onChange={(e) => setPass(e.target.value)} />
              {/* {errors?.pass && <p className={`${`${utils.errors} ${utils.s14}`} ${styles.errors_margin}`}>{errors?.pass}</p>} */}
            </div>
          </>}
          {teacherToken && <div className={styles.labelInput}>
            <label htmlFor="Program">
              <p className={utils.s14}>Programs</p>
            </label>
            <ParamyogaLoginDropdown placeholder={'Select the Program'} list={ProgramsList} state={programName} setState={setProgramName} />
            <div className={styles.buttonDiv} onClick={joinSessionHandler}>
              <button className={`${utils.btn2} ${styles.applyBtn}`}><p>Join Session</p> </button>
            </div>
          </div>}
          {!teacherToken && <div className={styles.buttonDiv} onClick={submitHandler}>
            <button className={`${utils.btn2} ${styles.applyBtn}`}><p>Login</p> </button>
          </div>}
        </div>
      </div>
      {/* <form onSubmit={submitHandler}>
        <label htmlFor="username">username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
        <button type='submit'>Login</button>
      </form>
      <div>
        <select name="programs" onChange={(e) => setProgramId(e.target.name)}>
          {ProgramsList.map(program => <option value={program.title} name={program.id}>{program.title}</option>)}
        </select>
        <button onClick={joinSessionHandler}>Join session</button>
      </div> */}
      {/* {isLoggedIn && instructorId && <div>
        <select name="programs" onChange={(e) => setProgramId(e.target.name)}>
          {ProgramsList.map(program => <option value={program.title} name={program.id}>{program.title}</option>)}
        </select>
        <button onClick={joinSessionHandler}>Join session</button>
      </div>} */}
    </div>
  )
}

export default ParamYogaLogin