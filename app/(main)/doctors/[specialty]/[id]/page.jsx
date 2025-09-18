import { getDoctorById, getAvailableTimeSlots } from "@/actions/appointments";
import { DoctorProfile } from "./_components/doctor-profile";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  return [
    { specialty: 'cardiology', id: '1' },
    { specialty: 'neurology', id: '2' },
      { specialty: 'General Medicine', id: '3' },
     { specialty: 'dermatology', id: '4' },
      { specialty: 'endocrinology', id: '5' },
       { specialty: 'gastroenterology', id: '6' },
         { specialty: 'obstetrics & gynecology', id: '7' },
          { specialty: 'oncology', id: '8' },
           { specialty: 'ophthalmology', id: '9' },
            { specialty: 'orthopedics', id: '10' },
             { specialty: 'pediatrics', id: '11' },
              { specialty: 'psychiatry', id: '12' },
               { specialty: 'pulmonology', id: '13' },
                { specialty: 'radiology', id: '14' },
                 { specialty: 'urology', id: '15' },
                  { specialty: 'other', id: '16' },
    // Add all combinations of specialty and id you want to export
  ];
}

export default async function DoctorProfilePage({ params }) {
  const { id } = await params;

  try {
    // Fetch doctor data and available slots in parallel
    const [doctorData, slotsData] = await Promise.all([
      getDoctorById(id),
      getAvailableTimeSlots(id),
    ]);

    return (
      <DoctorProfile
        doctor={doctorData.doctor}
        availableDays={slotsData.days || []}
      />
    );
  } catch (error) {
    console.error("Error loading doctor profile:", error);
    redirect("/doctors");
  }
}
