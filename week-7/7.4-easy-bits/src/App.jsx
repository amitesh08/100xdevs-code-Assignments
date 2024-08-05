
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './atoms'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'



function App() {

  return (
    <>
      <RecoilRoot>
        <MainApp/>
      </RecoilRoot>
    </>
  )
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom);
  const [messageAtomCount, setMessagingAtomCount] = useRecoilState(messagingAtom);
  // const totalNotification = jobsAtomCount+messageAtomCount+notificationsAtomCount+networkNotificationCount
  const totalNotification = useRecoilValue(totalNotificationSelector);

  return (
    <>
    
      <button>Home</button>
      <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsAtomCount}) </button>
      <button>Message ({messageAtomCount})</button>
      <button>Notification ({notificationsAtomCount}) </button>

      <button>ME ({totalNotification})</button>

    </>
  )
}

export default App
