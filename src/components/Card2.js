import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles as common } from '../styles/common'

const Card2 = ({ name, desc, price,quantity }) => {
    return (
        <View style={{ flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginLeft: 2}} >
            <View style={{ flexDirection:'row',alignItems:'center'}}>
                <Text style={common.fontSmallBold}>{name} X {quantity} </Text>
            </View>
            <Text style={[common.fontSmallBold,{marginRight:'3%'}]}>$40  </Text>
        </View>
        // <View style={[{ flexDirection: 'row',justifyContent:'space-between',alignItems: 'center', height: 70, borderRadius: 10, padding: 20, borderWidth: 1}]}>
        //     <View style={{ flexDirection: 'row' }}>
        //         <Image source={require("../assets/icons/pizza.png")} style={{ height: 40, width: 40, alignSelf: 'center' }} />
        //         <View style={{ justifyContent: 'center', padding: 20 }}>
        //             <View style={{ flexDirection:'row',alignItems:'center' }} >
        //                 <Text style={common.fontSmallBold}>{name} </Text>
        //                 <Image source={require("../assets/icons/veg.png")} style={{ height: 10, width: 10,marginLeft:'5%' }} />
        //             </View>
        //             <Text style={common.secondaryText}>{desc}</Text>
        //         </View>
        //     </View>
        //     <View style={{alignItems: 'center' }}>
        //         <View style={{ flexDirection: 'row', backgroundColor: '#F2A253', width: 60, height: 30, borderRadius: 20, justifyContent: 'space-evenly', alignItems: 'center' }}>
        //             <TouchableOpacity>
        //                 <Text style={common.fontLargeBold}>−</Text>
        //             </TouchableOpacity>
        //             <Text style={common.fontMediumBold}>2</Text>
        //             <TouchableOpacity>
        //                 <Text style={common.fontLargeBold}>+</Text>
        //             </TouchableOpacity>
        //         </View>
                
        //     </View>
        //     <View style={{alignItems: 'center' }}>
        //     <Text style={[common.fontSmallBold]}>$40 </Text>
        //     </View>
        // </View>
    )
}

export default Card2
