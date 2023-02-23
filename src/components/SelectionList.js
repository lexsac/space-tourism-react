import React from 'react';

const SelectionList = ({ data, page, isActive, handleClick, buttonText }) => {
    return (
      <ul className={`${page}-page__selectors`}>
        {data[page].map((item, idx) => {
          return (
            <li 
              className={(idx === isActive) ? `${page}-page__selector active` : `${page}-page__selector`} 
              key={idx}>
                <button 
                    onClick={(e) => handleClick(e, idx)}>
                    {buttonText === 'index' ? idx + 1 
                        : buttonText === 'name' ? item.name
                        : ''
                    }
                </button>
            </li>
          )
        })}
      </ul>
    )
  }

export default SelectionList;