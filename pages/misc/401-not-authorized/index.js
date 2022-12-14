// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Component Import
import Error401 from 'component/401'

const Error = () => <Error401 />
Error.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default Error
