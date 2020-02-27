import React, { Component } from 'react'
import items from './data'
const RoomContext = React.createContext()

 class RoomProvider extends Component {
     state={
         rooms:[],
         sortedRooms:[],
         featureRooms:[],
         loading:true,
         type:'all',
         capacity:0,
         price:0,
         minPrice:0,
         maxPrice:0,
         minSize:0,
         maxSize:0,
         breakfast:false,
         pets:false
     }
     componentDidMount(){
         let rooms = this.formatRooms(items)
         let featureRooms= rooms.filter(room=> room.featured===true)
         let maxPrice = Math.max(...rooms.map(room=>room.price))
         let maxSize = Math.max(...rooms.map(room=>room.size))
         this.setState({
             rooms,
             featureRooms,
             sortedRooms:rooms,
             loading:false,
             price:maxPrice,
             maxPrice,
             maxSize
         })
     }
     handleChange = event => {
       const target  = event.target;
       const value = target.type === 'checkbox' ?
                     target.checked : target.value
       const name  = event.target.name;
       console.log(name)
       this.setState({
           [name]:value
       },this.filterRooms)
       console.log(name)
     }
     
     filterRooms = ()=>{
         let {rooms, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets} = this.state
         let tempRooms = [...rooms]   
         capacity = parseInt(capacity)   
         if(type!="all"){
                    tempRooms = tempRooms.filter(room=>room.type===type)
                }
                
        if(capacity>=1){
                    tempRooms = tempRooms.filter(room=>room.capacity>=capacity)
        }
                    tempRooms = tempRooms.filter(room=>room.price<=price)

                    tempRooms = tempRooms.filter(room=>room.size>minSize && room.size<=maxSize)

                    if(breakfast){
                        tempRooms = tempRooms.filter(room=>room.breakfast===true)
                    }
                    if(pets){
                        tempRooms = tempRooms.filter(room=>room.pets===true)
                    }
        this.setState({
            sortedRooms:tempRooms
        })
     }
     formatRooms(items){
         let tempItems = items.map(item=>{
            let id = item.sys.id
            let images = item.fields.images.map(image=>image.fields.file.url)
            let room = {...item.fields,images,id}
            return room
         })
         return tempItems
      }

     getRoom = (slug)=>{
         let roomsTemp = [...this.state.rooms]
         const room = roomsTemp.find(room=>room.slug === slug)
         return room
     }
     
    render() {
        //console.log(this.getRoom('double-deluxe'))
        return (
            <RoomContext.Provider 
                value={{...this.state,
                        getRoom:this.getRoom,
                        handleChange:this.handleChange
                        }}>
                    {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer
// another way to access the consumer data by heigher order component
export  function hiegherRoomConsumer(Component) {
    return function consumerWrapper(props) {
        return <RoomConsumer>
                 {value=> <Component {...props} contextData={value}/>}
               </RoomConsumer>
    }
}
export {RoomContext, RoomProvider, RoomConsumer}