import BannerPage from "@/components/BannerPage";
import FeatureDoctor from "@/components/FeatureDoctor";


export default async function Home() {

  const res = await fetch(`${process.env.BASE_URL}/feature-doctor`, {cache: 'no-store'})
  const doctors = await res.json()
  // console.log(doctors, "doctors data")

  return (
    <div>
      <BannerPage></BannerPage>
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-11/12 mx-auto my-8">
        {
        doctors.map((doctor)=>{
          return <FeatureDoctor key={doctor._id} doctor={doctor}></FeatureDoctor>
        })
      }
      </div>
    </div>
  );
}
