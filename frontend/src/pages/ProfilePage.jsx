import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Profile from '../components/common/Profile'

function ProfilePage() {
  return (
    <> 
    <div className="Desktop">
     <NavMenuDesktop /> 
    </div>

    <div className="Mobile">
    <NavMenuMobile />  
    </div>                       

    <Profile />  

    <div className="Desktop">
    <FooterDesktop/>
    </div>

    <div className="Mobile">
    <FooterMobile/>
    </div>

</>
  )
}

export default ProfilePage
