// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Component Import
import Error500 from 'component/500'

const Error = () => <Error500 />
Error.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default Error
