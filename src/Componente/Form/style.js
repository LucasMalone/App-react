import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#fff",
        alignItems: "center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop:30    
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10
    },
    formLabel: {
        color: "#000000",
        fontSize: 10,
        paddingLeft: 20
    },
    formInput: {
        width: "90%",
        height: 40,
        borderRadius: 30,
        margin: 12,
        paddingLeft: 10
    },
    formButton: {
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#D62955",
        paddingBottom: 14,
        PaddingTop: 14,
        marginLeft: 12,
        margin: 30
    },
    formButtonText: {
        fontSize: 20,
        color: "#fff"
    }
})

export default styles