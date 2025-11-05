import { StyleSheet, Image, Text, View } from "@react-pdf/renderer";

const style = StyleSheet.create({
    section: {
    
        flexDirection: "column",
    },
    subsection_1: {
        display: 'flex',
        
        flexDirection: 'row',
        justifyContent: 'space-between',
            paddingTop:10,
            margin:'auto',
            columnGap:55,
            alignItems:'flex-start',
       
    },
    text_h2_subsection_1:{
        fontWeight:'400',
        flexWrap:'wrap',
        textTransform:'uppercase',
        
    },
    h1_subsection_2:{
        fontSize:16,
        fontWeight: '600'
    },
    h2_subsection_2:{
        fontWeight:'600',
    },
    text_span_subsection_1:{
        fontStyle:'italic',
        fontWeight:'bold',
        fontSize:10
    },
     text_span_subsection_2:{
        fontSize:10,
        fontWeight:'300'
     },
    subsection_general: {
        flexDirection:'column',
        alignItems:'center'

    },
    logo: {
        width: 100,
        height: 100
    },

})
const PdfLetterHead = () => {
    return (
        <View style={style.section}>
            <View style={style.subsection_1}>
                
                
                <View style={style.subsection_general}>
                    <Text wrap style={style.text_h2_subsection_1}>République du Cameroun</Text>
                    <Text >Paix – Travail – Patrie</Text>
                    <Text style={style.text_h2_subsection_1}>Ministère de</Text>
                    <Text style={style.text_h2_subsection_1}>l’Enseignement Supérieur</Text>
                    <Text>----------</Text>
                    <Text style={style.text_span_subsection_1}>Telephone: (237) 222 22 13 70</Text>

                    <Text style={style.text_span_subsection_1}>Email: dcoa@minesup.gov.cm</Text>
                    <Text >----------</Text>

                </View>
                <Image
                    style={style.logo}
                    src='/logo_minesupp.png'

                />
                <View style={style.subsection_general}>
                    <Text style={style.text_h2_subsection_1}>Republic of Cameroon</Text>
                    <Text >Peace – Work – Fatherland</Text>
                    <Text style={style.text_h2_subsection_1}>Ministry of </Text>
                    <Text style={style.text_h2_subsection_1}>Higher Education</Text>
                    <Text>----------</Text>
                    <Text style={style.text_span_subsection_1}>Fax: (237) 222 22 13 70</Text>
                    <Text style={style.text_span_subsection_1}>BP:1739 Yaounde</Text>
                    
                    <Text>----------</Text>


                </View>
            </View>







            <View style={style.subsection_general}>
                <Text style={style.h1_subsection_2} >Success Testimonial/Transcript*</Text>
                <Text style={style.text_span_subsection_2}>Attestation de reussite/Releve de Notes*</Text>
                <Text style={style.h2_subsection_2}>The Minister of State, Minister of Higher Education certifies that:</Text>
                <Text style={style.text_span_subsection_2}>Le Ministre d’État, Ministre de l’Enseignement supérieur soussigne,atteste que:</Text>
            </View>
        </View>
    );
}

export default PdfLetterHead;