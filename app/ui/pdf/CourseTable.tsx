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
    borderTopWidth: 0.7,
    borderTopColor: borderColor,
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

  general: {
    width: "10%",
    borderRightColor: 'borderColor',
    borderRightWidth: 1,

  },

});

interface courseItem{
  code: string,
  subject: string,
  credit: number,
  grade: number,
  nature: string
}

interface CourseByCategory{
  fundamentals: courseItem[],
  professional: courseItem[],
  traversal: courseItem[]
}
interface computedResults{
  totalCredits: number,
  gpa: number,
  grade: string,
  classification: string
}


const CourseTable = ({ courses,computedResults}: { courses: CourseByCategory, computedResults:computedResults }) => {
  return (
    <View style={style.tableContainer}>
      <View style={style.table_header}>
        <Text style={style.general}>Codes</Text>
        <Text style={style.description}>paper types/subject</Text>
        <Text style={style.general}>credits</Text>
        <Text style={style.general}>Natures</Text>
        <Text>Mark/20</Text>
      </View>
     {
        Object.entries(courses).map(([courseCategory,courseList])=>{
          
          return (
            <View key={courseCategory}>
        <View style={{ flexGrow: 1, justifyContent: 'center', display: 'flex', flexDirection: 'row',fontWeight:'600' }}>
          <Text>{courseCategory.charAt(0).toUpperCase()+courseCategory.slice(1)}</Text>

        </View>
        {
          courseList.map((course:courseItem)=>{
            return(
            <View key={course.code} style={{ borderBottom: 2 }}>
          <View style={style.row}>
            <Text style={[style.general, { padding: 2 }]}>{course.code}</Text>
            <Text style={[style.description, { padding: 2 }]}>{course.subject.toUpperCase()}</Text>
            <Text style={[style.general, { textAlign: 'right', paddingRight: 2 }]}>{course.credit}</Text>
            <Text style={[style.general, { textAlign: 'right', paddingRight: 2 }]}>{course.nature}</Text>

            <Text style={[{ textAlign: 'right', width: '10%', paddingRight: 2 }]}>{course.grade.toFixed(1)}</Text>
          </View>
        </View>
            )
          })
        }
        
      </View>
          )
        })
     }
      <View style={[style.row,{paddingVertical:1.3}]}>


        <Text style={[{ width: '40%', borderRightWidth: 1, paddingHorizontal:10,fontWeight:'bold' }]}>Grade: {computedResults.classification}</Text>
        <View style={{ width: '37%', borderRightWidth: 1,flexDirection:'row',justifyContent:'space-around',alignItems:'center',fontWeight:'bold' }}>
          <Text>Credit Earned:  {computedResults.totalCredits}</Text>
          <Text>**Grade: {computedResults.grade}</Text>
        </View>
        <Text style={[{ textAlign: 'right',paddingHorizontal: 5,fontWeight:'bold' }]}>**GPA:  {computedResults.gpa}</Text>
      </View>
    </View>
  );
}

export default CourseTable;