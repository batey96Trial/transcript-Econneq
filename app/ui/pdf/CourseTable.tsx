import { StyleSheet, View, Text } from "@react-pdf/renderer";


const borderColor = "#00000 ";

const style = StyleSheet.create({
  tableContainer: {
    flexWrap: "wrap",
    borderWidth: 1,
    borderColor: borderColor
  },
  row: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: borderColor
    // height: 24,

  },
  table_header: {
    flexDirection: "row",
    borderBottomColor: borderColor,
    backgroundColor: "#dddddd",
    borderBottomWidth: 1,
    alignItems: "center",
    textAlign: "center",
    flexGrow: 1
  },
  description: {
    width: "60%",
    borderRightColor: 'borderColor',
    borderRightWidth: 1
  },

  rate: {
    width: "10%",
    borderRightColor: 'borderColor',
    borderRightWidth: 1,

  },

});
const CourseTable = () => {
  return (
    <View style={style.tableContainer}>
      <View style={style.table_header}>
        <Text style={style.rate}>Codes</Text>
        <Text style={style.description}>paper types/subject</Text>
        <Text style={style.rate}>credits</Text>
        <Text style={style.rate}>Natures</Text>
        <Text>Mark/20</Text>
      </View>
      <View>
        <View style={{ flexGrow: 1, justifyContent: 'center', display: 'flex', flexDirection: 'row',fontWeight:'600' }}>
          <Text>Fundamental Papers</Text>

        </View>
        <View style={{ borderBottom: 2 }}>
          <View style={style.row}>
            <Text style={[style.rate, { padding: 2 }]}>ACC17</Text>
            <Text style={[style.description, { padding: 2 }]}>Quantitative Thechnics</Text>
            <Text style={[style.rate, { textAlign: 'right', paddingRight: 2 }]}>6</Text>
            <Text style={[style.rate, { textAlign: 'right', paddingRight: 2 }]}>Written</Text>

            <Text style={[{ textAlign: 'right', width: '10%', paddingRight: 2 }]}>15.0</Text>
          </View>
          <View style={style.row}>
            <Text style={[style.rate, { padding: 2 }]}>ACC17</Text>
            <Text style={[style.description, { padding: 2 }]}>Quantitative Thechnics</Text>
            <Text style={[style.rate, { textAlign: 'right', paddingRight: 2 }]}>6</Text>
            <Text style={[style.rate, { textAlign: 'right', paddingRight: 2 }]}>Written</Text>

            <Text style={[{ textAlign: 'right', width: '10%', paddingRight: 2 }]}>15.0</Text>
          </View>
          <View style={style.row}>
            <Text style={[style.rate, { padding: 2 }]}>ACC17</Text>
            <Text style={[style.description, { padding: 2 }]}>Quantitative Thechnics</Text>
            <Text style={[style.rate, { textAlign: 'right', paddingRight: 2 }]}>6</Text>
            <Text style={[style.rate, { textAlign: 'right', paddingRight: 2 }]}>Written</Text>

            <Text style={[{ textAlign: 'right', width: '10%', paddingRight: 2 }]}>15.0</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={{ flexGrow: 1, justifyContent: 'center', display: 'flex', flexDirection: 'row',fontWeight:'600' }}>
          <Text>Professional Papers</Text>

        </View>
        <View style={{ borderBottom: 2 }}>
          <View style={style.row}>
            <Text style={[style.rate, { padding: 2 }]}>ACC17</Text>
            <Text style={[style.description, { padding: 2 }]}>Quantitative Thechnics</Text>
            <Text style={[style.rate, { textAlign: 'right', paddingRight: 2 }]}>6</Text>
            <Text style={[style.rate, { textAlign: 'right', paddingRight: 2 }]}>Written</Text>

            <Text style={[{ textAlign: 'right', width: '10%', paddingRight: 2 }]}>15.0</Text>
          </View>
          <View style={style.row}>
            <Text style={[style.rate, { padding: 2 }]}>ACC17</Text>
            <Text style={[style.description, { padding: 2 }]}>Quantitative Thechnics</Text>
            <Text style={[style.rate, { textAlign: 'right', paddingRight: 2 }]}>6</Text>
            <Text style={[style.rate, { textAlign: 'right', paddingRight: 2 }]}>Written</Text>

            <Text style={[{ textAlign: 'right', width: '10%', paddingRight: 2 }]}>15.0</Text>
          </View>
          <View style={style.row}>
            <Text style={[style.rate, { padding: 2 }]}>ACC17</Text>
            <Text style={[style.description, { padding: 2 }]}>Quantitative Thechnics</Text>
            <Text style={[style.rate, { textAlign: 'right', paddingRight: 2 }]}>6</Text>
            <Text style={[style.rate, { textAlign: 'right', paddingRight: 2 }]}>Written</Text>

            <Text style={[{ textAlign: 'right', width: '10%', paddingRight: 2 }]}>15.0</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={{ flexGrow: 1, justifyContent: 'center', display: 'flex', flexDirection: 'row',fontWeight:'600' }}>
          <Text>Traversal Papers</Text>

        </View>
        <View style={{ borderBottom: 0 }}>
          <View style={style.row}>
            <Text style={[style.rate, { padding: 2 }]}>ACC17</Text>
            <Text style={[style.description, { padding: 2 }]}>Quantitative Thechnics</Text>
            <Text style={[style.rate, { textAlign: 'right', paddingRight: 2 }]}>6</Text>
            <Text style={[style.rate, { textAlign: 'right', paddingRight: 2 }]}>Written</Text>

            <Text style={[{ textAlign: 'right', width: '10%', paddingRight: 2 }]}>15.0</Text>
          </View>
          <View style={style.row}>
            <Text style={[style.rate, { padding: 2 }]}>ACC17</Text>
            <Text style={[style.description, { padding: 2 }]}>Quantitative Thechnics</Text>
            <Text style={[style.rate, { textAlign: 'right', paddingRight: 2 }]}>6</Text>
            <Text style={[style.rate, { textAlign: 'right', paddingRight: 2 }]}>Written</Text>

            <Text style={[{ textAlign: 'right', width: '10%', paddingRight: 2 }]}>15.0</Text>
          </View>
          <View style={style.row}>
            <Text style={[style.rate, { padding: 2 }]}>ACC17</Text>
            <Text style={[style.description, { padding: 2 }]}>Quantitative Thechnics</Text>
            <Text style={[style.rate, { textAlign: 'right', paddingRight: 2 }]}>6</Text>
            <Text style={[style.rate, { textAlign: 'right', paddingRight: 2 }]}>Written</Text>

            <Text style={[{ textAlign: 'right', width: '10%', paddingRight: 2 }]}>15.0</Text>
          </View>
        </View>
      </View>
      <View style={[style.row,{paddingVertical:1.3}]}>


        <Text style={[{ width: '40%', borderRightWidth: 1, paddingHorizontal:10 }]}>Grade: Lower credit</Text>
        <View style={{ width: '37%', borderRightWidth: 1,flexDirection:'row',justifyContent:'space-around',alignItems:'center' }}>
          <Text>Credit Earned:   60</Text>
          <Text>**Grade: B</Text>
        </View>
        <Text style={[{ textAlign: 'right',paddingHorizontal: 5 }]}>**GPA:  2,73</Text>
      </View>
    </View>
  );
}

export default CourseTable;