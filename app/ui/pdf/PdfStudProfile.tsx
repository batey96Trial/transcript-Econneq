import { StyleSheet, View, Text, Image, } from "@react-pdf/renderer";


const style = StyleSheet.create({
    section: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-around'
    },
    subsection_1: {
        display: 'flex',
        flexDirection: 'column',
        marginRight: 'auto'
    },

    details: {
        flexDirection: 'column',
        marginRight:'auto'
    },
    detail: {
        display: 'flex',
        flexDirection: 'column',
        // rowGap: 8,
        // fontWeight:'600'
    },
    text_labeled_name: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 8,
        fontWeight: '600'
    },
    text_translated: {
        marginTop: -4,
        fontSize: 10,
        fontWeight: '300'
    }
})

const PdfStudProfile = () => {
    return (
        <View style={style.section}>
            <View style={style.details}>
                <View style={style.detail}>
                    <View style={style.text_labeled_name}>  {/** contact block */}
                        <Text>M/Mrs/Miss:</Text>
                        <Text>Kinge Plan Molonge</Text>
                    </View>
                    <Text style={[style.text_translated,{fontStyle: 'italic'}]}>M/Mme/Miss:</Text>   {/** translated */}
                </View>

                <View style={style.detail}>
                    <View style={style.text_labeled_name}>  {/** contact block */}
                        <Text>Born on:</Text>
                        <Text>13/02/2001</Text>
                    </View>
                    <Text style={[style.text_translated,{fontStyle: 'italic'}]}>Ne(e) le:</Text>   {/** translated */}
                </View>
                <View style={style.detail}>
                    <View style={style.text_labeled_name}>  {/** contact block */}
                        <Text>Registeration Number:</Text>
                        <Text>20AC0096</Text>
                    </View>
                    <Text style={[style.text_translated,{fontStyle: 'italic'}]}>No Matricule:

                    </Text>   {/** translated */}
                </View>
            <View>
                <Text>Has qualififed for the</Text>
                <Text style={[style.text_translated,{fontStyle: 'italic'}]}>A subi avec success les epreuves de l'examen du:</Text>
            </View>
            </View>
            <View style={{margin:'auto',alignItems:'center',justifyContent:'space-evenly'}}>
                <Image 
                src="/barcode.png"
                style={{ objectFit: 'contain',width:70,height:80 }}
                />
                <Text style={[style.text_translated,{color:'red'}]}>Yaounde,the 30 oct 2020</Text>
            </View>
        </View>
    );
}

export default PdfStudProfile;