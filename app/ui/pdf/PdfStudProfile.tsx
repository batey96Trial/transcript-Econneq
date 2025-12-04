import { StyleSheet, View, Text, Image, } from "@react-pdf/renderer";

const style = StyleSheet.create({
    section: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    subsection_1: {
        display: 'flex',
        flexDirection: 'column',
        marginRight: 'auto'
    },

    details: {
        flexDirection: 'column',
        marginRight: 'auto'
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
        fontSize:11,
        fontWeight: '600'
    },
    text_translated: {
        marginTop: -4,
        fontSize: 10,
        fontWeight: '300'
    }
})

interface student{
    name: string,
    domain: string,
    specialty: string,
    matricule: string,
    field: string,
    dob: string
}

const PdfStudProfile = ({ student }: { student?: student }) => {
    return (
        <>
            <View style={style.section}>
                <View style={style.details}>
                    <View style={style.detail}>
                        <View style={style.text_labeled_name}>  {/** contact block */}
                            <Text>M/Mrs/Miss:</Text>
                            <Text>{student?.name}</Text>
                        </View>
                        <Text style={[style.text_translated, { fontStyle: 'italic' }]}>M/Mme/Miss:</Text>   {/** translated */}
                    </View>

                    <View style={style.detail}>
                        <View style={style.text_labeled_name}>  {/** contact block */}
                            <Text>Born on:</Text>
                            <Text>{student?.dob}</Text>
                        </View>
                        <Text style={[style.text_translated, { fontStyle: 'italic' }]}>Ne(e) le:</Text>   {/** translated */}
                    </View>
                    <View style={style.detail}>
                        <View style={style.text_labeled_name}>  {/** contact block */}
                            <Text>Registeration Number:</Text>
                            <Text>{student?.matricule}</Text>
                        </View>
                        <Text style={[style.text_translated, { fontStyle: 'italic' }]}>No Matricule:

                        </Text>   {/** translated */}
                    </View>
                    <View>
                        <Text>Has qualififed for the</Text>
                        <Text style={[style.text_translated, { fontStyle: 'italic' }]}>A subi avec success les epreuves de l'examen du:</Text>
                    </View>
                </View>
                <View style={{ margin: 'auto', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <Image
                        src="/barcode.png"
                        style={{ objectFit: 'contain', width: 70, height: 80 }}
                    />
                    <Text style={[style.text_translated, { color: 'red' }]}>Yaounde,the 30 oct 2020</Text>
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <Text style={{ fontSize: 14, color: 'red', textTransform: 'uppercase', textAlign: 'center', fontWeight: '700' }}>Higher National Diploma (HND)</Text>
                <View style={style.section}>
                    <View style={style.details}>
                        <View style={style.detail}>
                            <View style={style.text_labeled_name}>  {/** contact block */}
                                <Text>Session de
                                    :</Text>
                                <Text>June-July 2020</Text>
                            </View>
                            <Text style={[style.text_translated, { fontStyle: 'italic' }]}>Session:</Text>   {/** translated */}
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View>  {/** contact block */}
                                <Text style={{ fontWeight: '600' }}>Domain:</Text>
                                <Text style={[style.text_translated, { fontStyle: 'italic' }]}>Domain:</Text>
                            </View>
                            <Text style={{ textTransform: 'uppercase', maxWidth: '45%', fontWeight: '600',fontSize:11 }} >{student?.domain}</Text>

                        </View>
                        <View style={[style.detail, { marginTop: 4 }]}>
                            <View style={style.text_labeled_name}>  {/** contact block */}
                                <Text>Sector:
                                </Text>
                                <Text style={{ textTransform: 'uppercase' }}>{student?.specialty}</Text>
                            </View>
                            <Text style={[style.text_translated, { fontStyle: 'italic' }]}>Specialite:


                            </Text>   {/** translated */}
                        </View>

                    </View>
                    <View style={{}}>
                        <View style={style.detail}>
                            <View style={style.text_labeled_name}>  {/** contact block */}
                                <Text>Center</Text>
                                <Text style={{ textTransform: 'uppercase' }}>Douala</Text>
                            </View>
                            <Text style={[style.text_translated, { fontStyle: 'italic' }]}>Centre:</Text>   {/** translated */}
                        </View>
                        <View style={style.detail}>
                            <View style={style.text_labeled_name}>  {/** contact block */}
                                <Text>Field:</Text>
                                <Text style={{ textTransform: 'uppercase' }}>{student?.field}</Text>
                            </View>
                            <Text style={[style.text_translated, { fontStyle: 'italic' }]}>Filiere:</Text>   {/** translated */}
                        </View>
                    </View>
                </View>
            </View>
        </>



    );
}

export default PdfStudProfile;