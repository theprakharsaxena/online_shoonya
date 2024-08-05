import React, { useState, useRef, useEffect } from 'react';
import DropdownStyles from '../styles/Dropdown.module.css';
import utils from '../styles/utils.module.css';
import rightArrow from '../assets/LandingPage/right_arrow_landing_page_section.png';
import styles from '../styles/Dropdown2.module.css';
import formPageStyles from '../styles/ApplicationFormPage.module.css';

const Dropdown3 = ({ docIndex, placeholder, list, state, setState }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handlerValueClick = (value) => {
    setState((prevState) => {
      const newState = [...prevState];
      newState[docIndex] = { ...newState[docIndex], type: value };
      return newState;
    });
    setIsOpen(false);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file.size > 20 * 1024 * 1024) {
      alert('File size exceeds 20 MB. Please select a smaller file.')
      return;
    } else if (file && file.type !== 'application/pdf') {
      alert('Only PDF files are allowed. Please select a PDF file.');
      return;
    }

    setState((prevState) => {
      const newState = [...prevState];
      newState[docIndex] = { ...newState[docIndex], file: file };
      return newState;
    });
  };

  return (
    <>
      <div className={`${DropdownStyles.customDropdown} ${styles.customDropdownExtra}`} ref={dropdownRef}>
        <div className={`${DropdownStyles.dropdownHeader} ${styles.dropdownHeaderExtra}`} onClick={toggleDropdown}>
          <button className={`${utils.btn1} ${styles.select}`}>
            <p className={styles.placeholder3}>{state && state[docIndex] ? state[docIndex].type || placeholder : placeholder}</p>
            <img src={rightArrow} className={DropdownStyles.downArrow} />
          </button>
        </div>
        {isOpen && (
          <div className={`${DropdownStyles.dropdownContent} ${styles.dropdownContentExtra}`}>
            {list.map((value) => (
              <div key={value} className={DropdownStyles.valueOption} onClick={() => handlerValueClick(value)}>
                <label><p className={`${styles.placeholder} ${styles.valueItem}`}>{value}</p></label>
              </div>
            ))}
          </div>
        )}
      </div>
      <input type="file" accept='.pdf' onChange={handleFileSelect} className={formPageStyles.docInput} />
    </>
  );
};

export default Dropdown3;
