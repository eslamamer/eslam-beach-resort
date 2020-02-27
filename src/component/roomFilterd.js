import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from './Title'

//get unique items:
const getUnique = (items, value)=>{
    return [...new Set(items.map(item=>item[value]))]
}
export default function RoomFilterd({rooms}) {
    const context = useContext(RoomContext)
    const {
        handleChange,
        type,
        capacity,
         price,
         minPrice,
         maxPrice,
         minSize,
         maxSize,
         breakfast,
         pets
    } = context
    let types = getUnique(rooms, "type")
    types = ["all",...types]
    types = types.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ));
    let people = getUnique(rooms, "capacity")
    people = [...people]
    people = people.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ));
    return (
        <section className="filter-container">
            <Title title="search room"/>
            <form className="filter-form">
                {/*select type*/}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select
                        name = "type"
                        id = "type"
                        value = {type}
                        className = "form-control"
                        onChange = {handleChange}
                    >  
                     {types} 
                    </select>
                </div>
                    {/*select capacity*/}
                <div className="form-group">
                    <label htmlFor="capacity">guests</label>
                    <select
                        name = "capacity"
                        id = "capacity"
                        value = {capacity}
                        className = "form-control"
                        onChange = {handleChange}
                    >  
                    {people} 
                    </select>
                </div>
                    {/*select price*/}
                <div className="form-group">
                    <label htmlFor="price">room price {price}</label>
                    <input
                        type="range"
                        name="price"
                        value={price}
                        max={maxPrice} 
                        min={minPrice}
                        id="price"
                        onChange={handleChange}
                        className="form-control"
                     />
                </div>
                    {/*insert size*/}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input
                            type="number"
                            name="minSize"
                            value={minSize}
                            id="size"
                            onChange={handleChange}
                            className="size-input"
                        />
                        <input
                            type="number"
                            name="maxSize"
                            value={maxSize}
                            id="size"
                            onChange={handleChange}
                            className="size-input"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="breakfast"
                            value={breakfast}
                            id="breakfast"
                            onChange={handleChange}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="pets"
                            value={pets}
                            id="pets"
                            onChange={handleChange}
                        />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
            </form>
        </section>
    )
}
