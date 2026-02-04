import { useForm } from "react-hook-form";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";

type FormData = {
  companyName: string;
  companyWebsite: string;
  contactPerson: string;
  contactPersonPosition: string;
  contactPersonMobile: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    alert("Form successfully submitted!");
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-card rounded-lg shadow-sm border border-gray-200 mb-3 p-6 animate-fade-in text-center">
          <div className="-mx-6 -mt-6 mb-6 rounded-t-lg overflow-hidden flex">
            <div className="h-2 bg-black w-1/3"></div>
            <div className="h-2 bg-red-600 w-1/3"></div>
            <div className="h-2 bg-yellow-400 w-1/3"></div>
          </div>
          <img src="/logo-full.png" alt="Logo" className="w-1/2 mb-4 mx-auto" />
          <h1 className="text-3xl mb-2">Contact Form</h1>
          <p className="text-gray-600 text-sm">
            Please fill out all required fields. We will get back to you as soon as possible.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* Company Information Section */}
          <div className="bg-card rounded-lg shadow-sm border border-gray-200 p-6 animate-fade-in animate-delay-100">
            <h2 className="text-lg mb-4 text-gray-900">Company Information</h2>

            <div className="space-y-5 flex flex-col">
              <div>
                <Label htmlFor="companyName" className="text-sm text-gray-700 mb-1.5 block">
                  Company Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="companyName"
                  {...register("companyName", { required: "This field is required" })}
                  className="border-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#673ab7] transition-colors"
                  placeholder="Your answer"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-xs mt-1">{errors.companyName.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="companyWebsite" className="text-sm text-gray-700 mb-1.5 block">
                  Company Website <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="companyWebsite"
                  {...register("companyWebsite", { required: "This field is required" })}
                  className="border-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#673ab7] transition-colors"
                  placeholder="Your answer"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-xs mt-1">{errors.companyName.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="contactPerson" className="text-sm text-gray-700 mb-1.5 block">
                  Contact Person <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="contactPerson"
                  {...register("contactPerson", { required: "This field is required" })}
                  className="border-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#673ab7] transition-colors"
                  placeholder="Your answer"
                />
                {errors.contactPerson && (
                  <p className="text-red-500 text-xs mt-1">{errors.contactPerson.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="contactPersonMobile" className="text-sm text-gray-700 mb-1.5 block">
                  Mobile Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="contactPersonMobile"
                  type="tel"
                  {...register("contactPersonMobile", { required: "This field is required" })}
                  className="border-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#673ab7] transition-colors"
                  placeholder="Your answer"
                />
                {errors.contactPersonMobile && (
                  <p className="text-red-500 text-xs mt-1">{errors.contactPersonMobile.message}</p>
                )}
              </div>
              <Button
                type="submit"
                className="text-white px-6 ml-auto"
              >
                Submit
              </Button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}