import { StyleSheet, View, Text, Image, } from "@react-pdf/renderer";

const PdfFooter = () => {
    return (
        <View style={{ fontSize: '10' }} >
            <View  >
                <Text>In witness whereof the present document is given with all the priviledges pertaining thereto,</Text>
                <Text>En foi de quoi, le présent document est donné avec tous les privilèges qui s'y rattachent,</Text>

            </View>
            <View style={{ textAlign: 'justify', marginLeft: 'auto', fontWeight: '600' }}>
                <Text>For the Minister of State, Minister of Higher Education,</Text>
                <Text>Chancellor of Acadmeic Orders by Delegation,</Text>
                <Text>The Director for the Coordination of Academic Affairs</Text>

            </View>

            <View>
                <Text>**GPA=General Pondered Average</Text>
                <View style={{display:'flex',justifyContent:'space-between',flexDirection:'row'}}>
<View>
                    <Text>4.0=A+={"{"}18 20{"]"}</Text>
                                        <Text></Text>

                    <Text></Text>

                </View>
                                <View></View>
                                                <View></View>


                </View>
                

                <Text>En foi de quoi, le présent document est donné avec tous les privilèges qui s'y rattachent,</Text>

            </View>

        </View>
    );
}


export default PdfFooter;