import React from "react"
import Head from "../components/Head"
import Footer from "../components/Footer"
import { StyleSheet,Text, View } from "react-native"


function Profile(): React.JSX.Element {
    return (
        <View >
            <Head />
            <Text >Tela de Perfil</Text>
            <Footer />
        </View>
    )
}

export default Profile