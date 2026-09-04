import Image from "next/image";
import News from "../components/News";
export default function Home(){
  return(
    <div>
      <h1 className="w-10 h-10 flex items-center justify-center border-2 rounded-full bg-green-600 m-1">M</h1>
     
      <hr className="text-blue-300 mt-1 mb-1 " />

        {/* News of the day */}
      {/* <div className="bg-gray-700"> */}
        {/* Components */}
        <News 
          date="03-09-2026"
          heading="Healthy Brain Scan /V/S/ Suicidal Brain Scan"
          newspart= {<> September is Suicide Prevention Month.  After being a Psychiatrist for over 40 years, it's clear to me that suicidal thoughts and brains work differently. 
            Amen Clinics has scanned hundreds of patients who have attempted suicide and many more who have thought about taking their own life. The SPECT scans of these patients revealed abnormalities in the brain, especially in these areas: 
            * Temporal Lobes: Brain SPECT imaging shows that people with suicidal thoughts and suicide attempts often have abnormalities in the left temporal lobe. In an Amen Clinics study, we saw left temporal lobe problems in 62 percent of our patients who had serious suicidal thoughts or behaviors. 
            * Traumatic Brain Injury (TBI): After reviewing nearly 300,000 functional brain scans related to behavior it is clear that head injuries are a leading cause of mental health issues, such as depression, anxiety disorders, panic disorder, PTSD, ADHD/ADD, substance abuse, psychosis, borderline and antisocial personality disorders, dementia, and aggression. Concussions and TBIs also increase the risk of suicide. When the brain has functional damage due to a head injury, it’s critical to heal the brain in order to overcome any mental health problems. At Amen Clinics, 40 percent of our patients have had a significant brain injury.
            * Prefrontal Cortex: A large-scale study by researchers at Portland State University found that about 22 percent of people who died by suicide were legally intoxicated at the time of their death. Brain scans show that alcohol lowers function in the prefrontal cortex, a brain region involved in impulse control, judgment, and decision-making.
            * Anterior Cingulate Gyrus: People with overactivity in this area of the brain tend to get stuck on negative thoughts, which is one of the traits we see in people with suicidal thoughts and behavior
            </>}
          src="/down.jpg"
          alt="windows image"
          width={200}
          height={200}
          className=""
          
          />

      <hr className="text-blue-300 mt-1 mb-1 " />
    
    </div>
  )
}