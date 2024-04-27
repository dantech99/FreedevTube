interface CourseProps {
  params: any;
  slug: string;

}

export default async function Course({ params }: { params: CourseProps }) {

  return (
    <h1>curso en cuestion</h1>
  )
  
}