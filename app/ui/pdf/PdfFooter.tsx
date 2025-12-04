import { StyleSheet, View, Text, Image, } from "@react-pdf/renderer";

const PdfFooter = () => {
    return (
        <View style={{ fontSize: '9px',height:'220px' }} >
            <View  >
                <Text>In witness whereof the present document is given with all the priviledges pertaining thereto,</Text>
                <Text style={{fontWeight:'bold'}}>En foi de quoi, le présent document est donné avec tous les privilèges qui s'y rattachent,</Text>

            </View>
            <View style={{ textAlign: 'justify', marginLeft: 'auto', fontWeight: '600' }}>
                <Text>For the Minister of State, Minister of Higher Education,</Text>
                <Text>Chancellor of Acadmeic Orders by Delegation,</Text>
                <Text>The Director for the Coordination of Academic Affairs</Text>

            </View>

            <View>
                <Text>**GPA=General Pondered Average</Text>
                <View style={{ display: 'flex', gap: '1rem', flexDirection: 'row' }}>
                    <View>
                        <Text>4.0=A+={"{"}18 20{"]"}</Text>
                        <Text>3.0=B={"["}13 14{"["}</Text>

                        <Text>2.0=C={"["}10 11{"["}</Text>

                    </View>
                    <View>
                        <Text>3.7=A={"["}16 18{"["}</Text>
                        <Text>2.7=B-={"["}12 13{"["}</Text>
                        <Text>1.7=C-={"["}9 10{"["}</Text>                        

                    </View>
                    <View> 
                        <Text>3.3=B+={"["}14 16{"["}</Text>
                        <Text>2.3=C+={"["}11 12{"["}</Text>
                        <Text>1.3=D={"["}8 9{"["}</Text>
                    </View>
                </View>


                <Text style={{fontWeight:'bold'}}>The Average score on 20 is GPA X5</Text>

            </View>
            <View style={{marginTop:'auto'}}>
                <Text style={{paddingLeft:'15px'}}> NB: Only one copy of this document is issued. It is in the interest of the owner to make as many certified true copiesas he may desire</Text>
                <Text style={{paddingLeft:'35px'}}>Furthermore, this document shall be presented at the competent Office before deliverance of the Diploma.</Text>
                <Text style={{paddingLeft:'35px'}}>Il n'est delivre qu'un seul exemplaire de ce document. Le titulaire peut en obtenir autant de copies conformes que necessaire.</Text>
                <Text style={{paddingLeft:'35px'}}>En outre ce document devra etre presente au Service competent lors du retrait du Diplome.</Text>
            </View>
        </View>
    );
}


export default PdfFooter;