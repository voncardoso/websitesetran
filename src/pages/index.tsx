import type { NextPage } from 'next'
import { useEffect } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/firestore';



const Home: NextPage = () => {

  useEffect(() =>{
    firebase.firestore().collection('siteConfig').get().then(
      (docs) => console.log(docs.docs.map((doc) => doc.data())))
  }, [])
  return (
    <>
      <h1>Hello word</h1>
    </>
  )
}

export default Home
