import { StyleSheet, View, Text, Image, } from "@react-pdf/renderer";
import CourseTable from "./CourseTable";

const style = StyleSheet.create({
    section: {
        display: 'flex',
        flexDirection: 'row',
        columnGap:45
    },
    details: {
        flexDirection: 'column',
    },
    detail: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: 1,
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
const ProgamDetails = () => {
    return (
        <View style={{display:'flex', flexDirection: 'column' }}>
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

                    <View style={{display:'flex',flexDirection:'row'}}>
                        <View>  {/** contact block */}
                            <Text style={{fontWeight:'600'}}>Domain:</Text>
                            <Text style={[style.text_translated, { fontStyle: 'italic' }]}>Domain:</Text>
                        </View>
                            <Text style={{textTransform:'uppercase', maxWidth: '45%',fontWeight:'600'}} >Management,Business Studies and Legal Careers</Text>

                    </View>
                    <View style={[style.detail,{marginTop:4}]}>
                        <View style={style.text_labeled_name}>  {/** contact block */}
                            <Text>Sector:
                            </Text>
                            <Text style={{textTransform:'uppercase'}}>Accountancy</Text>
                        </View>
                        <Text style={[style.text_translated, { fontStyle: 'italic' }]}>Specialite:


                        </Text>   {/** translated */}
                    </View>

                </View>
                <View style={{}}>
                    <View style={style.detail}>
                        <View style={style.text_labeled_name}>  {/** contact block */}
                            <Text>Center</Text>
                            <Text style={{textTransform:'uppercase'}}>Douala</Text>
                        </View>
                        <Text style={[style.text_translated, { fontStyle: 'italic' }]}>Centre:</Text>   {/** translated */}
                    </View>
                    <View style={style.detail}>
                        <View style={style.text_labeled_name}>  {/** contact block */}
                            <Text>Field:</Text>
                            <Text style={{textTransform:'uppercase'}}>Business and Finance</Text>
                        </View>
                        <Text style={[style.text_translated, { fontStyle: 'italic' }]}>Filiere:</Text>   {/** translated */}
                    </View>
                </View>
            </View>
            <CourseTable />
        </View>
    );
}

export default ProgamDetails;