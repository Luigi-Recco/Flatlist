
import { Text, SafeAreaView, StyleSheet,FlatList,ScrollView } from 'react-native';



export default function App() {

constructor(props)
{
  super(props);
  this.state = 
  {
    legioes:[
      {id:'1', nome:'Death Guards'},
      {id:'2',nome:'Blood Angels'},
      {id:'3',nome:'Black Templars'},
      {id:'4',nome:'Sons of Emperor'},
      {id:'5',nome:'Inquisition'} 
         ]
  }
}

  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>


      
      <FlatList
        
        data = {this.state.legioes}
        
        keyExtractor={({item})=>item.id}
        
        renderItem={({item})=>
        
        <View style = {styles.containerlegioes}>
        
        <Text style = {styles.title}>{item.nome}</Text>
        
        </View>
        }
      
      />
     
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  containerlegioes:{
    backgroundColor:'orange',
    height:40,
    margin:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  title:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
  }

});
