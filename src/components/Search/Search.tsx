'use client'

import {Country} from '../../interfaces/Country';
import React, { useState } from 'react';

export default function Search(props: any) {

  const [countriesList, setCountriesList] = useState<Country[]>(props.countries);
  const [filteredCountries , setFilteredCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string | null | any>('');
  const [showResults, setShowResults] = useState<boolean>(false);

  const filterInfo = (typedText: string) => {
    if (!typedText) {
      setFilteredCountries([]);
      return;
    }
    setShowResults(true);
    const filterData = countriesList.filter(country => country.name.toLocaleLowerCase().includes(typedText.toLocaleLowerCase()));
    setFilteredCountries(filterData);
  }

  function onClickResultItem(event: React.MouseEvent) {
    const elementClicked = event.target as HTMLElement;
    setSelectedCountry(elementClicked.textContent);
    setShowResults(false);

  }

  function onChangeInput(event:any){
    setSelectedCountry(event.target.value);
    filterInfo(event.target.value);
  }

  return (
    <div className='search my-10 flex flex-col justify-center relative'>
        <div className="search__input-container flex rounded-full bg-black w-96 mx-8">
            <input 
              value={selectedCountry}

              onChange={onChangeInput} className='flex-1 p-2 px-8 rounded-full bg-inherit text-white' type="text" placeholder='Country' />
        </div>
        {
          (filteredCountries.length > 0 && showResults) ? 
          <div className="search__results bg-black text-white w-96 mx-8 my-4 px-4 py-2 rounded-lg absolute top-10">
          <ul>
            {
              filteredCountries.map(country => 
                  <li onClick={onClickResultItem} className='py-1' key={country.code}>{country.name}</li>
                )
            }
          </ul>
        </div>
        : ""
        }

    </div>
  )
}
