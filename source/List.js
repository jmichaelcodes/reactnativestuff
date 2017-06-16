import React, {Component} from 'react'
import {
ListView,
StyleSheet,
Text,
View
}
from 'react-native'

import Row from './Row'

const people = [{
  "firstName": "Georges",
  "lastName": "Langabeer",
  "email": "glangabeer0@wisc.edu",
  "avatar": "https://robohash.org/corruptiidneque.bmp?size=50x50&set=set1"
}, {
  "firstName": "Karlens",
  "lastName": "Yaakov",
  "email": "kyaakov1@nydailynews.com",
  "avatar": "https://robohash.org/quisquamquiut.png?size=50x50&set=set1"
}, {
  "firstName": "Lockwood",
  "lastName": "Rees",
  "email": "lrees2@jalbum.net",
  "avatar": "https://robohash.org/laboriosamoptiodeserunt.bmp?size=50x50&set=set1"
}, {
  "firstName": "Marv",
  "lastName": "Scarborough",
  "email": "mscarborough3@cbc.ca",
  "avatar": "https://robohash.org/enimomnisrerum.bmp?size=50x50&set=set1"
}, {
  "firstName": "Frasco",
  "lastName": "Probate",
  "email": "fprobate4@geocities.jp",
  "avatar": "https://robohash.org/perspiciatisasperioresdignissimos.jpg?size=50x50&set=set1"
}, {
  "firstName": "Libbie",
  "lastName": "Konke",
  "email": "lkonke5@comcast.net",
  "avatar": "https://robohash.org/enimvoluptasdolores.bmp?size=50x50&set=set1"
}, {
  "firstName": "Guy",
  "lastName": "Bollam",
  "email": "gbollam6@thetimes.co.uk",
  "avatar": "https://robohash.org/sitvoluptasinventore.bmp?size=50x50&set=set1"
}, {
  "firstName": "Melessa",
  "lastName": "MacCahee",
  "email": "mmaccahee7@oracle.com",
  "avatar": "https://robohash.org/cupiditatesuscipitest.jpg?size=50x50&set=set1"
}, {
  "firstName": "Karl",
  "lastName": "Makeswell",
  "email": "kmakeswell8@nhs.uk",
  "avatar": "https://robohash.org/eumarchitectoadipisci.png?size=50x50&set=set1"
}, {
  "firstName": "Duky",
  "lastName": "Pearson",
  "email": "dpearson9@indiegogo.com",
  "avatar": "https://robohash.org/voluptasvoluptatemeum.png?size=50x50&set=set1"
}, {
  "firstName": "Rock",
  "lastName": "McQuorkell",
  "email": "rmcquorkella@stanford.edu",
  "avatar": "https://robohash.org/delenitiremqui.png?size=50x50&set=set1"
}, {
  "firstName": "Fanchon",
  "lastName": "Fuller",
  "email": "ffullerb@guardian.co.uk",
  "avatar": "https://robohash.org/eiusquaelaudantium.bmp?size=50x50&set=set1"
}, {
  "firstName": "Leodora",
  "lastName": "Broadwood",
  "email": "lbroadwoodc@fda.gov",
  "avatar": "https://robohash.org/quidoloresaut.png?size=50x50&set=set1"
}, {
  "firstName": "Melly",
  "lastName": "Diviney",
  "email": "mdivineyd@tamu.edu",
  "avatar": "https://robohash.org/repellateaquedicta.jpg?size=50x50&set=set1"
}, {
  "firstName": "Abey",
  "lastName": "Dearnly",
  "email": "adearnlye@alexa.com",
  "avatar": "https://robohash.org/officiisdistinctiout.png?size=50x50&set=set1"
}, {
  "firstName": "Reilly",
  "lastName": "Ternouth",
  "email": "rternouthf@berkeley.edu",
  "avatar": "https://robohash.org/remfugaquae.bmp?size=50x50&set=set1"
}, {
  "firstName": "Ricky",
  "lastName": "Buttriss",
  "email": "rbuttrissg@dailymail.co.uk",
  "avatar": "https://robohash.org/officiisomnispariatur.jpg?size=50x50&set=set1"
}, {
  "firstName": "Neron",
  "lastName": "Hould",
  "email": "nhouldh@java.com",
  "avatar": "https://robohash.org/nonmolestiaeconsequatur.jpg?size=50x50&set=set1"
}, {
  "firstName": "Dorolisa",
  "lastName": "Hart",
  "email": "dharti@soup.io",
  "avatar": "https://robohash.org/illovoluptatemdoloribus.jpg?size=50x50&set=set1"
}, {
  "firstName": "Randolf",
  "lastName": "Savin",
  "email": "rsavinj@github.io",
  "avatar": "https://robohash.org/molestiaeinvoluptas.bmp?size=50x50&set=set1"
}]

class List extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    this.state = {
      dataSource: ds.cloneWithRows(people),
    };
  }

  renderPersonRow(person) {
  	return(
  		<View>
  			<Text>{person.firstName}</Text>
  		</View>
  		)
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
    //     renderRow={(person) => (<View>
  		// 	<Text>{person.firstName}</Text>
  		// </View>)}	
     		renderRow={(person) => (<Row firstName={person.firstName} lastName={person.lastName} avatar={person.avatar}/>)}	
      />
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: '#f4f4f4',
		alignSelf: 'stretch',
	},
})

export default List