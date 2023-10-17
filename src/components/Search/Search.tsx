'use client'

import {Country} from '../../interfaces/Country';
import React, { useState } from 'react';

export default function Search(props: any) {

  const [countriesList, setCountriesList] = React.useState<Country[]>(props.countries);
  const [filteredCountries , setFilteredCountries] = React.useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = React.useState<string | null>('');

  const filterInfo = (typedText: string) => {
    if (!typedText) {
      setFilteredCountries([]);
      return;
    }
    const filterData = countriesList.filter(country => country.name.toLocaleLowerCase().includes(typedText.toLocaleLowerCase()));
    setFilteredCountries(filterData);
  }

  function onClickResultItem(event: React.MouseEvent){
    const elementClicked = event.target as HTMLElement;
    setSelectedCountry(elementClicked.textContent)
  }

  function onChangeInput(event:any){
    filterInfo(event.target.value)
  }

  return (
    <div className='search my-10 flex flex-col justify-center relative'>
        <div className="search__input-container flex rounded-full bg-black w-96 mx-8">
            <input onChange={onChangeInput} className='flex-1 p-2 px-8 rounded-full bg-inherit text-white' type="text" placeholder='Country' />
        </div>
        {
          filteredCountries.length > 0 ? 
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
