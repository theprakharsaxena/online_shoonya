import React, { useState, useRef, useEffect } from 'react';
import DropdownStyles from '../styles/Dropdown.module.css';
import utils from '../styles/utils.module.css';
import rightArrow from '../assets/LandingPage/right_arrow_landing_page_section.png';
import Dropdown2Styles from '../styles/Dropdown2.module.css';
import styles from '../styles/Dropdown4.module.css'

const Dropdown4 = ({ placeholder, list, state, setState, width }) => {
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
    <div className={`${DropdownStyles.customDropdown} ${styles.customDropdownExtra}`} style={{ width: width }} ref={dropdownRef}>
      <div className={`${DropdownStyles.dropdownHeader} ${Dropdown2Styles.dropdownHeaderExtra}`} onClick={toggleDropdown}>
        <button className={`${utils.btn1} ${Dropdown2Styles.select} ${styles.selectBtn}`}><p className={`${Dropdown2Styles.placeholder} ${styles.placeholderExtra}`}>{state ? state : placeholder}</p> <img src={rightArrow} className={DropdownStyles.downArrow} /></button>
      </div>
      {isOpen && (
        <div className={`${DropdownStyles.dropdownContent} ${Dropdown2Styles.dropdownContentExtra}`}>
          {list.map((value) => (
            <div key={value} className={DropdownStyles.valueOption} onClick={() => handlerValueClick(value)}>
              <label><p className={`${Dropdown2Styles.placeholder} ${styles.subPlaceholderExtra}`}>{value}</p></label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown4;