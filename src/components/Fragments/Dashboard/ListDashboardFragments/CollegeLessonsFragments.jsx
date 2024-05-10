import ContentList from "../../../Elements/DashboardElements/ListDashboard/Content"
import HeaderOne from "../../../Elements/DashboardElements/ListDashboard/HeaderList"
import HeaderTwo from "../../../Elements/DashboardElements/ListDashboard/HeaderTwo"
import Option from "../../../Elements/DashboardElements/ListDashboard/Option"

const CollegeLessonsFragments = () => {
  return (
    <>
    <HeaderOne title="College Lessons"/>
    <HeaderTwo titleSelect="Day" subject="College Lessons">
        <Option value=""/>
        <Option value="Senin" />
        <Option value="Selasa" />
        <Option value="Rabu" />
        <Option value="Kamis" />
        <Option value="Jumat" />
    </HeaderTwo>
    <ContentList>
        
    </ContentList>
    </>
  )
}

export default CollegeLessonsFragments
