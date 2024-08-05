import React, { useState, useRef, useEffect } from 'react';
import DropdownStyles from '../styles/Dropdown.module.css';
import utils from '../styles/utils.module.css';
import rightArrow from '../assets/LandingPage/right_arrow_landing_page_section.png';
import styles from '../styles/Dropdown2.module.css';

const ParamyogaLoginDropdown = ({ placeholder, list, state, setState, width }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close the dropdown when clicking outside of it
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

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Update the selected issue
  const handlerValueClick = (value) => {
    setState(value);
    setIsOpen(false);
  };

  return (
    <div className={DropdownStyles.customDropdown} style={{ width: width }} ref={dropdownRef}>
      <div className={`${DropdownStyles.dropdownHeader} ${styles.dropdownHeaderExtra}`} onClick={toggleDropdown}>
        <button className={`${utils.btn1} ${styles.select}`}><p className={`${styles.placeholder} ${state && styles.activePlaceholder}`}>{state ? state : placeholder}</p> <img src={rightArrow} className={DropdownStyles.downArrow} /></button>
      </div>
      {isOpen && (
        <div className={`${DropdownStyles.dropdownContent} ${styles.dropdownContentExtra}`}>
          {list.map((program) => (
            <div key={program.id} className={DropdownStyles.valueOption} onClick={() => handlerValueClick(program.title)}>
              <label><p className={`${styles.placeholder} ${styles.valueItem}`}>{program.title}</p></label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ParamyogaLoginDropdown;

