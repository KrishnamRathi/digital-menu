import React from 'react'
import { StyleSheet, Text, View ,TextInput,ScrollView, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../styles/styles'

export default function SignupScreen({navigation}) {
    return (
        <ScrollView style={{
            flex: 1,
            alignSelf: 'stretch',
            // marginTop: '2%',
            paddingLeft: 20,
            paddingRight: 20,
            // backgroundColor:'#edf0f2'
            // alignItems: 'stretch'
            
        }}
            >
            <View style={{marginTop:30}}>
            <Text style={[styles.heading,{marginBottom:'5%'}]}>Signup</Text>
                <Image
                    style={styles.image}
                    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGnQjwlnpoWL6tGPNtqMrlylwEKupNdilyTh-KpvHd_mQEahNy1FS8RvYfKUf-xX0iBCw&usqp=CAU'}}
                />
            <View style={[styles.SectionStyle,styles.shadows]}>
                    <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJTGVnbpOOjFmSSVVujeGD5z859GlOnWz0Pg&usqp=CAU'}} style={styles.ImageStyle} />
                    <TextInput
                        style={{flex:1}}
                        placeholder="Name"
                        underlineColorAndroid="transparent"
                    />
            </View>
            <View style={[styles.SectionStyle,styles.shadows]}>
                    <Image source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAjVBMVEX8/PwAAAD29vb////5+fnOzs7z8/Pw8PDn5+cKCgrh4eHs7OzR0dFvb28GBgbt7e1oaGiXl5d0dHQWFhZra2uioqKUlJSMjIyGhobY2NghISFjY2ODg4Pj4+O9vb2np6czMzMqKiodHR1FRUVOTk6wsLBbW1vDw8M6Ojp6enomJiYeHh5VVVU/Pz9ISEgqOVsGAAAIJElEQVR4nO2dfZuiLBTGU+zNakot7b2sqaZ2dr//x1ubpsmDiBgQ4nD/s9f1rE/ykyMc7oNsw66zGqobIFWGTl8ZOn1l6PSVodNXv4fOcRr6y3GIdHVAu8nJ0qluklDhdKrbI1gOoFPdGuFyUnSq2yJBD7r6DCgPOT90qlsiRXe6OnbdrfPqS9f4plPdDEmqN51j6LSVodNXhk5fGTp9Zej0laHTV4ZOXxk6fWXo9JWh01eGTl8ZOn1l6PSVodNXhk5fGTp9Zej0laHTV4buS6h6EkaHHPd0mFDl5SskK8rX9KElWdGm3yrkY6NDvck+6JbUG0mWZX3/wavuNuoIoUOuHwhoj2i9jd2C3mOiay1Vg+Ro2hJAd7ioxshRvKZv32Oha51VU+QqpLecgQ71FqohcrVsc9OtjqohcnUectO5n6ohcuX3qKMmC11noBoiVx590GQaM08V7bxd1KM3nC1Xcc9d1SQEfRxsEbN5A7UnW9UsGS2aBa0ukUVXLTqDaFW8SGBfAc0qFZ3bTfEKoczqFQ0nsWqmHx1PDQa4Mmtz1Fi/q6a6abecsbCVdB5QvxIroe2kzQZX0ldBQy9WzWa9s0VlebprdP5Tyxb4jFHJTJc2aNBsrHLsjD0QlQVfZ7HQ2f3040K9cK4Mbr92Hk1BzvrEvwLqjD77qVBH9nqvhu1tDB5zazP3O/xrhKP1F6Z0s5EKuLmXXu+gznJniaBL1uaXaAh+WUF07tfgCfcXb8nqVQyd1cWi4vDq6ByBt8O53V8UnWX9OzhpvuZLo3MedUDsRLElls6KQxD3q+h1RuAeJM2of5+VBND9eGJdHxuz/r4IbtFEYCL4yXdF0iVZ0BpG50vcsh1gQL1UNihgzEz7mfEEG5Xlj50fExvkSn6qxiKYLhudH5LhPk9grDyBVZhoumuOns6GGk2plkT3nDYYUHsTg78WT5dEZxtGp7y0Gt4q681JoEtWIS58oLIMMxAmJF9VBl32ZZAzdp7BK24THqIcumQgA9OruxRRLIa6wKR5tfyTvUYSXTIJwegUbue+w8SPHB4+3dTkqN8dT+m7N9ZCo7M76IOoPJDTIll9l+gvTP5mAg2zSwSThignaZDXd9caDIxOYYbZHkRloznOu1AmHVapSKe3POomSXPqV23KUlIunfVxAH7+bMA/s++mWNJMSWUl01lBCNoypLWFSVvsefm0i2XTXaMz9b8n0clnSRybaafZLjCH5dNZ+xO4xYyjzB4s4eaodcEK5AV0R9giDsNsu8HqH27BreXTHfvYHe6GVWl9ZuofyKV7UwLohtQ7LAhVC9Qcl887gzPpl9zcue4VdEdiSSbJLsoaZltvSPwlKp5kOjIcJTPM0/s6pypHxZNLt8AGFGCYLdhn9mAAlnLgcGC0yh+EpdJBOGd9gIbxlHXsjENQpXA9UJShbOXip2vk0i0yk5M/Sz+W1oHNMAP1D9ToH60YLu5y8Xz63mEeuixcxglhsnNHhEeC4+XkYwNpdCMM7rY4h6VftFoWLfrw+sf0ZjDEGxCcPfL+XgF0bSIdGY5gmNGjc3+A9Y/FfaKMN7D3iHiy6PLgrHKG2ahJqMrddIG9R8STRDfOh7tOzCA63dzo3E2B09z7rsrd8WABoUP4bkAO3RiOxAfMEINJFWpPyNGJGTN9fOl7gbZiL2srSqErgLOwbWqIvDsXXkOyLeY4Hp4fyKArhrOsjw2MzoxhFsD6R4+4g7AITwLdAJiIDhEOX4iilgcv22JVuZzdn388gNeewsvE07HBWZiJgFXeqFU5Kh6IAeF0AC4Zw+O8dmUMINe/P/ju2U3990xVDmhHwxNN57PDZcy7oXdb9F2wGeNMzWd2IcSLUsEpmK4UnGW9HQl2LtxaUPy1QxCBh9GKHg9DLJ2PvXMFcFbmo4G+H/j9NLDNUHjH8NrhD55QunO5nvvSBcuS10+sAXPxRNJhcLSxIKU3WBYA6/cT48dvAdyE1/IC4XTn3jNw1nUdQPykJYlKZmcwmPYg3k4UXWtEhCthel1CQhWxnKvbjTC8P0LpIJxdBu7ajIylmyTNpX6hC3vP/uo9EXRXy+0M3mt7UtZMx6KTWpXLwVtieHNhfXce8sFh+36f2jqO400u+DLzGbr2QgBcopRhRq/K5eJhb8fkbUT/OIGJzh+IgLOsf7ck5fkKdBfOSXYY8vedM4NrmQlhWwyb4jB5e7l2D8BMsNXh/t4cM9A54G6GGd+hEXA3LbXnyp8ek8DxFcaPHueunYINODx091mUQ9ybIgYMn4Q+RfeTASlVQfHgWbpqwBXO4c/RVQUuY8qJoEOtsArfhX5pxNZ7Jb5ZblcHjhWP/XvzSsFliod8dFWDY8NjPQmhHVbppIAvkTbKPEWHhlXruauK8djyzGFUQTgGPCa6TjXhrlvU+E/cciaVe+fuWnLvab/5KtVUQWwy0VX31CYBzoOhUyRDZ+iqKUNn6KopQ/e76Z4q2LxEBc4t06lNoWqIXEUiTgd91UkjZfVxojecic6paOd1PQHniTXQcFrFxfnFKzplktU1Ohxfw/d1VD1+nn1A0Hx/Xhcd7MrsZ9qrflOIbj/T59bMpR8VXYqu1v/6g6YydPrK0OkrQ6evDJ2+MnT6ytDpK0OnrwydvjJ0+srQ6StDp68Mnb4ydPrK0OkrQ6evDJ2+MnT6ytDpq3rT2b+BrmC/la76pqtn5zm1prPvdHXEcx50NXzz7Add/fDsNF3d8GxIVys8x8bp6sPnPJBSdFfAGijNA+nqJkOnrwydvvoP7k/qFG9bNp0AAAAASUVORK5CYII='}} style={styles.ImageStyle} />
                    <TextInput
                        style={{flex:1}}
                        placeholder="Email"
                        underlineColorAndroid="transparent"
                    />
            </View>
            <View style={[styles.SectionStyle,styles.shadows]}>
                    <Image source={{uri:'data:image/png;base64,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'}} style={styles.ImageStyle} />
                    <TextInput
                        keyboardType="numeric"
                        style={{flex:1}}
                        placeholder='Mobile No.'
                        underlineColorAndroid="transparent"
                        onChangeText={(value) => {
                            if(isNaN(value)){alert('Not a valid number')}
                            // if(value.length!==10){alert('Not a valid number')}
                        }}
                    />
            </View>
                <View style={[styles.SectionStyle,styles.shadows]}>
                    <Image source={{uri:'data:image/png;base64,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'}} style={styles.ImageStyle} />
                    <TextInput
                        style={{flex:1}}
                        placeholder="Password"
                        underlineColorAndroid="transparent"
                        secureTextEntry={true}
                    />
                </View>
                <View style={[styles.SectionStyle,styles.shadows]}>
                    <Image source={{uri:'data:image/png;base64,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'}} style={styles.ImageStyle} />
                    <TextInput
                        style={{flex:1}}
                        placeholder="Confirm Password"
                        underlineColorAndroid="transparent"
                        secureTextEntry={true}
                    />
                </View>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Login')}
                style={{alignSelf:'center'}}
            >
                <Text>Already have an account? Sign In </Text>
            </TouchableOpacity>
            <View style={{marginTop: '4%'}}></View>
            <View>
                <TouchableOpacity style={[styles.button,styles.container]} >
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
    )
}

