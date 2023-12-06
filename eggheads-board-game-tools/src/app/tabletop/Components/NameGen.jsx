import Image from 'next/image'
import NameGenImg from '../../../../public/Images/characterCreation.webp'

//    Name Generators for 
//      towns
//      cities
//      NPCs

export default function NameGen () {

// // Function to process a local CSV file
// function processLocalCSVFile(file) {
//     const reader = new FileReader();
  
//     reader.onload = function(event) {
//       const csvData = event.target.result;
//       const rows = csvData.split('\n');
//       const data = rows.map(row => row.split(',')); // Adjust delimiter as needed
  
//       // Process data (e.g., loop through rows)
//       data.forEach(row => {
//         // Do something with each row
//         console.log(row);
//       });
//     };
  
//     reader.onerror = function(event) {
//       console.error('Error reading the file:', event.target.error);
//     };
  
//     reader.readAsText(file);
//   }
  
//   // Usage: Trigger file input and handle selected file
//   const fileInput = document.createElement('input');
//   fileInput.type = 'file';
//   fileInput.addEventListener('change', function(event) {
//     const selectedFile = event.target.files[0];
//     processLocalCSVFile(selectedFile);
//   });
  
//   // Append the file input to the document body or another DOM element
// //   document.body.appendChild(fileInput);
  
      

    return(
        <section id='dmContent' className='flex flex-col gap-5 px-12 lg:basis-1/2 mb-10'>
            <h1>Name Generator</h1>
            <Image className='rounded-md mx-auto' src={NameGenImg} width={800} height={500} placeholder='blur' alt="Character Creation Screen" />
            <p className='text-center text-red-500'>Not Yet Implemented.</p>
        </section>
    )
}