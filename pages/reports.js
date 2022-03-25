import Head from 'next/head'

const Reports = () => {

  return (
    <>
      <Head>
        <title>Reports | Military Service Records</title>
      </Head>

      <div className="pt-12">
        <h1 className='text-4xl text-center md:text-left mb-8'>Reports</h1>
        <h2 className='text-xl mb-4'>Available Reports:</h2>
        <ul className='ml-4 list-disc'>
          <li>DD-214</li>
          <li>Transcripts</li>
          <li>Medical Report</li>
          <li>Veteran Status</li>
        </ul>
      </div>
    </>
  )
}

export default Reports
