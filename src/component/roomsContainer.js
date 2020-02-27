import React from 'react'
import RoomFilterd from './roomFilterd'
import RoomList from './roomList'
import {hiegherRoomConsumer} from '../context'
import Loading from './Loading'
function RoomsContainer({contextData}){
const {loading, sortedRooms, rooms} = contextData
if(loading)
    return <Loading/>
    return  <>
                <RoomFilterd rooms={rooms}/>
                <RoomList rooms={sortedRooms}/>
            </>
}
export default hiegherRoomConsumer(RoomsContainer)



/*
import React from 'react'
import RoomFilterd from './roomFilterd'
import RoomList from './roomList'
import {RoomConsumer} from '../context'
import Loading from './Loading'
export default function RoomsContainer() {
    return (
        <RoomConsumer>
            {value=>{
                const { loading, sortedRooms, rooms} = value
                if(loading)
                return <Loading/>

               return  <div>
                        <RoomFilterd rooms={rooms}/>
                        <RoomList rooms={sortedRooms}/>
                       </div>
            }}
            
        </RoomConsumer>
   )
}
*/