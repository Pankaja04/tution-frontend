import ProfileImg from "../assets/Images/profile.jpg.png";
import { Formik } from "formik";
import * as yup from "yup";
import Input from "../components/input";

const initialValues = {
  school: "",
  subject_stream: "",
  exam_year: "",
  district: "",
  address: "",
  nfc_code: "",
  nic:"",
  parents_mobile:"",
  upload_images:"",
};

const validationSchema = yup.object({
    school: yup.string().required(""),
    subject_stream: yup.string().required(""),
    exam_year: yup.string().required(""),
    district: yup.string().email("").required(""),
    nfc_code: yup.string().required(""),
    nic: yup.string().required("Required"),
    parents_mobile: yup.string().required("Required"),
    upload_images: yup.string().required("Required"),
});

export default function Profile() {
  const handleFormSubmit = (values: any) => {
    alert(JSON.stringify(values, null, 2));
  };
  return (
    <div className=" flex flex-col sm:flex-row items-center justify-between  min-h-screen p-4   bg-regal-gray">
      <div className="hidden sm:inline-block p-4 ">
        <img
          className="   object-cover rounded-xl"
          src={ProfileImg}
          alt="ALDTAN"
        />
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {(formik) => {
          return (
            <div className="  bg-regal-light  rounded-xl  border-[1px] shadow  sm:rounded-md p-8">
              <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <br />
                <br />
                

                <span className="text-3xl  font-bold text-center mt-5 ">
                  Profile update
                </span>
                
                
                <br />
                <br />
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="col-span-6 sm:col-span-3 w-[347.5px] h-[82.81px] top-[300.27px] left-[564px] radius-[5px] border-[1px solid]">
                      <Input
                        className="input input-bordered w-full max-w-xs"
                        label="School"
                        type="text"
                        name="school"
                        placeholder="ex: School name"
                        onChange={formik.handleChange}
                        value={formik.values.school}
                      />
                    </div>

                   <div className="col-span-6 sm:col-span-3 w-[347.5px] h-[82.81px] top-[397.92px] left-[932px] radius-[5px] border-[1px solid]">
                      <Input
                        className="input input-bordered w-full max-w-xs"
                        label="Exam year"
                        type="text"
                        name="exam_year"
                        placeholder="ex: 2024"
                        onChange={formik.handleChange}
                        value={formik.values.exam_year}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 w-[347.5px] h-[82.81px] top-[397.92px] left-[932px] radius-[5px] border-[1px solid]">
                      <Input
                        className="input input-bordered w-full max-w-xs"
                        label="Address"
                        type="text"
                        name="address"
                        placeholder="ex: Home address"
                        onChange={formik.handleChange}
                        value={formik.values.address}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 w-[347.5px] h-[82.81px] top-[397.92px] left-[932px] radius-[5px] border-[1px solid]">
                      <Input
                        className="input input-bordered w-full max-w-xs"
                        label="NIC"
                        type="text"
                        name="nic"
                        placeholder="ex: 15616546546V"
                        onChange={formik.handleChange}
                        value={formik.values.nic}
                      />
                    </div>
                  </div>



                <div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-2 w-[347.5px] h-[82.81px] top-[300.27pxpx] left-[932px] radius-[5px] border-[1px solid]">
                      <Input
                        className="input input-bordered w-full max-w-xs"
                        label="Subject Stream"
                        type="text"
                        name="subject_stream"
                        placeholder="ex: Stream name"
                        onChange={formik.handleChange}
                        value={formik.values.subject_stream}
                      />
                    </div>

                  <div className="col-span-6 sm:col-span-3 w-[347.5px] h-[82.81px] top-397.92px] left-[564.5px] radius-[5px] border-[1px solid]">
                    <Input
                      className="input input-bordered w-full max-w-xs"
                      label="District"
                      type="text"
                      name="district"
                      placeholder="ex: District"
                      onChange={formik.handleChange}
                      value={formik.values.district}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 w-[347.5px] h-[82.81px] top-[496px] left-[564px] radius-[5px] border-[1px solid]">
                    <Input
                      className="input input-bordered w-full max-w-xs"
                      label="NFC Code"
                      type="text"
                      name="nfc_code"
                      placeholder="ex: NFC code"
                      onChange={formik.handleChange}
                      value={formik.values.nfc_code}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 w-[347.5px] h-[82.81px] top-[496px] left-[564px] radius-[5px] border-[1px solid]">
                    <Input
                      className="input input-bordered w-full max-w-xs"
                      label="Parent's Mobile"
                      type="text"
                      name="parents_mobile"
                      placeholder="ex: 07********"
                      onChange={formik.handleChange}
                      value={formik.values.parents_mobile}
                    />
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-3 w-[347.5px] h-[82.81px] top-[496px] left-[564px] radius-[5px] border-[1px solid]">
                    <Input
                      className="input input-bordered w-full max-w-xs"
                      label="Upload images"
                      type="text"
                      name="upload_images"
                      placeholder=""
                      onChange={formik.handleChange}
                      value={formik.values.upload_images}
                    />
                  </div>
                </div>
<br />
                <div className="md:col-span-5">
                <div className="inline-flex items-center">
                  <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox w-[21.31px] h-[21.31px] flex-shrink-0 border-[1px]" />
                  <label className="ml-2">I agree to all the Terms, Privacy Policy and Fees</label>
                </div>
              </div>


                <button
                  type="submit"
                  className="w-full my-5 py-3 bg-regal-red shadow-lg shadow-red-500/50 hover:shadow-red-500/40 text-white font-semibold   rounded-sm "
                >
                  UPDATE
                </button>
<br />


                <label className="font-size-[13px] font-style:normal font-weight:500">By clicking Sign Up, you agree to our Terms of Use and our Privacy Policy.</label>
<br />
                <label htmlFor="">Already have an account? Log in</label>
<br />
<br />
<br />
<br />

              </form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}