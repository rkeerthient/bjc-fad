import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import "../index.css";
import PageLayout from "../components/pageLayout";
import { Address, Image } from "@yext/pages-components";
import { ChevronLeftIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { format_phone } from "../utils/reusableFunctions";
import { BsCameraVideo, BsCheckCircle } from "react-icons/bs";
import StaticMap from "../components/StaticMap";
import InsurancePlans from "../components/InsurancePlans";
import StarRating from "../components/StarRating";
export const config: TemplateConfig = {
  stream: {
    $id: "professionals",
    localization: { locales: ["en"] },
    filter: {
      entityTypes: ["healthcareProfessional"],
    },
    fields: [
      "name",
      "id",
      "description",
      "headshot",
      "slug",
      "photoGallery",
      "logo",
      "emails",
      "address",
      "mainPhone",
      "yextDisplayCoordinate",
      "educationList",
      "c_location.name",
      "c_location.address",
      "c_location.mainPhone",
      "c_location.yextDisplayCoordinate",
      "taxonomy_relatedSpecialties.name",
      "certifications",
      "languages",
    ],
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.id.toString();
};
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  return {
    title: `${document.name} | Professional`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: "Healthcare Professional",
        },
      },
    ],
  };
};

const DegreeMap: any = {
  FELLOWSHIP: "Fellowship",
  RESIDENCY: "Residency",
  MEDICAL_SCHOOL: "Medical School",
  INTERNSHIP: "Internship",
};

const Professional = ({ document, __meta }: TemplateProps) => {
  const {
    _site,
    name,
    headshot,
    address,
    emails,
    description,
    mainPhone,
    educationList,
    c_location,
    taxonomy_relatedSpecialties,
    yextDisplayCoordinate,
    certifications,
    languages,
  } = document;

  return (
    <PageLayout _site={document._site}>
      <article className=" bg-slate-100 text-[#020f59] p-8">
        <a
          className="flex border border-[#020f59] text-xl gap-2 items-center px-4 py-1 rounded-full text-[#020f59] w-fit mb-8"
          href="/?vertical=healthcare-professional"
        >
          <ChevronLeftIcon className="h-5 w-5" /> Back to search
        </a>
        <section className="flex justify-start">
          <h1 className="text-4xl">{name}</h1>
          {taxonomy_relatedSpecialties && (
            <p className="text-2xl rounded-full border px-4 py-1">
              {taxonomy_relatedSpecialties.name}
            </p>
          )}
        </section>
        <section className="flex justify-start my-8 gap-4">
          <span className="flex border border-[#020f59] text-xl gap-2 items-center px-4 py-2 rounded-full bg-green-100 w-fit">
            <BsCheckCircle className="h-5 w-5" /> Accepting New Patients
          </span>
          <span className="flex border border-[#020f59] text-xl gap-2 items-center px-4 py-2 rounded-full text-[#020f59] w-fit">
            <BsCameraVideo className="h-5 w-5" /> Accepting New Patients
          </span>
        </section>
        <section className="pb-16 w-full flex items-start  mx-auto justify-start">
          {headshot && (
            <div className="w-fit">
              <Image image={headshot} className="!w-fit" />
            </div>
          )}

          {educationList && (
            <article className="w-1/3 px-8 flex flex-col text-lg ">
              <h2 className="py-4 uppercase text-xl font-bold">Education</h2>
              {educationList.map((item: any, index: number) => (
                <div
                  key={index}
                  className="py-1 flex justify-between items-start gap-24"
                >
                  <dt className="w-2/4 font-medium text-gray-900">
                    {DegreeMap[item.type]}
                  </dt>
                  <dd className="w-full text-gray-700 sm:mt-0">
                    {item.institutionName} - {item.yearCompleted}
                  </dd>
                </div>
              ))}
            </article>
          )}

          {educationList && (
            <article className="w-1/3 px-8 flex flex-col text-lg ">
              <h2 className="py-4 uppercase text-xl font-bold">Contact</h2>
              <address className="flex flex-col gap-2">
                <span className="flex gap-2 items-center not-italic">
                  <PhoneIcon className="w-4 h-4" /> {format_phone(mainPhone)}
                </span>
                {c_location &&
                  c_location.map((item: any, index: any) => (
                    <span
                      className="flex gap-2 items-center not-italic"
                      key={index}
                    >
                      <PhoneIcon className="w-4 h-4" />{" "}
                      {format_phone(item.mainPhone)}
                    </span>
                  ))}
              </address>
            </article>
          )}
        </section>
      </article>
      <article className=" text-[#020f59]  p-8">
        <h2 className="text-4xl">Practice Locations</h2>
        <hr className="h-1 bg-[#020f59] my-4" />
        <section className="flex ">
          <div className="flex flex-col gap-4  w-2/5">
            <Address address={address} className="text-2xl ml-4" />
            {c_location &&
              c_location.map((item: any, index: any) => (
                <Address
                  key={index}
                  address={item.address}
                  className="text-2xl ml-4"
                />
              ))}
          </div>
          {yextDisplayCoordinate && (
            <StaticMap
              coordinates={processCoordinates(
                c_location,
                yextDisplayCoordinate
              )}
            ></StaticMap>
          )}
        </section>
      </article>
      <article className=" text-[#020f59] p-8">
        <h2 className="text-4xl">Insurance Plans</h2>
        <hr className="h-1 bg-[#020f59] my-4" />
        <p className="text-2xl font-normal">
          Browse the list below to view insurance plans.
        </p>
        <p className="text-xl font-light my-8">
          The list below is for reference purposes only and is subject to
          change. Please check with your insurance to confirm that this doctor
          is included in your plan before scheduling an appointment.
        </p>
        <InsurancePlans />
        <p className="text-xl font-light my-8">
          Before scheduling your appointment, we strongly recommend that you
          contact your health insurance company to verify that the location or
          provider you plan to visit is included in your network. Your health
          insurance company will also be able to inform you of any co-payments,
          co–insurances, or deductibles for which you are financially
          responsible, or out-of-network benefits for which you are eligible. If
          you are uninsured, you can find more information about our financial
          assistance policy here
        </p>
      </article>
      <article className=" text-[#020f59] p-8">
        <h2 className="text-4xl">About {name}</h2>
        <hr className="h-1 bg-[#020f59] my-4" />
        <p className="text-xl font-light my-8">{description}</p>
      </article>

      <article className=" text-[#020f59] bg-slate-100 p-8">
        <section className="pb-16 w-full flex items-start  mx-auto justify-start">
          {educationList && (
            <article className="w-1/2 px-8 flex flex-col text-lg ">
              <h2 className="py-4 uppercase text-xl font-bold">Education</h2>
              {educationList.map((item: any, index: number) => (
                <div
                  key={index}
                  className="py-1 flex justify-between items-start gap-24"
                >
                  <dt className="w-2/4 font-medium text-gray-900">
                    {DegreeMap[item.type]}
                  </dt>
                  <dd className="w-full text-gray-700 sm:mt-0">
                    {item.institutionName} - {item.yearCompleted}
                  </dd>
                </div>
              ))}
            </article>
          )}

          {certifications && (
            <article className="w-1/2 px-8 flex flex-col text-lg ">
              <h2 className="py-4 uppercase text-xl font-bold">Education</h2>
              {certifications.map((item: any, index: number) => (
                <div
                  key={index}
                  className="py-1 flex justify-between items-start gap-24"
                >
                  <dd className="w-full text-gray-700 sm:mt-0">{item}</dd>
                </div>
              ))}
            </article>
          )}
        </section>
        {languages && (
          <article className="w-1/2 px-8 flex flex-col text-lg ">
            <h2 className="py-4 uppercase text-xl font-bold">Languages</h2>
            {languages.map((item: any, index: number) => (
              <div
                key={index}
                className="py-1 flex justify-between items-start gap-24"
              >
                <dd className="w-full text-gray-700 sm:mt-0">{item}</dd>
              </div>
            ))}
          </article>
        )}
      </article>

      <article className=" text-[#020f59] p-8">
        <h2 className="text-4xl">Ratings & Reviews</h2>
        <hr className="h-1 bg-[#020f59] my-4" />
        <p className="border-b-2 py-2 text-gray-900 font-light w-full uppercase text-2xl">
          Provider Overall Quality of Care
        </p>
        <div className="w-3/5">
          <p className="border-b-2 py-2 text-gray-900 font-light w-full uppercase text-2xl grid grid-cols-3">
            <span className="2xl">Listens Well</span>
            <span className="2xl w-fit">5.0</span>
            <span className="2xl text-[#020f59]">
              <StarRating selectedStars={5} />
            </span>
          </p>
          <p className="border-b-2 py-2 text-gray-900 font-light w-full uppercase text-2xl grid grid-cols-3">
            <span className="2xl">Explains Clearly</span>
            <span className="2xl w-fit">4.5</span>
            <span className="2xl text-[#020f59]">
              <StarRating selectedStars={4.5} />
            </span>
          </p>
          <p className="border-b-2 py-2 text-gray-900 font-light w-full uppercase text-2xl grid grid-cols-3">
            <span className="2xl">Communicates Well</span>
            <span className="2xl w-fit">5.0</span>
            <span className="2xl text-[#020f59]">
              <StarRating selectedStars={5} />
            </span>
          </p>
          <p className="border-b-2 py-2 text-gray-900 font-light w-full uppercase text-2xl grid grid-cols-3">
            <span className="2xl">Shows Courtesy & Respect</span>
            <span className="2xl w-fit">4.5</span>
            <span className="2xl text-[#020f59]">
              <StarRating selectedStars={4.5} />
            </span>
          </p>
          <p className="border-b-2 py-2 text-gray-900 font-light w-full uppercase text-2xl grid grid-cols-3">
            <span className="2xl">Involves Patient</span>
            <span className="2xl w-fit">5.0</span>
            <span className="2xl text-[#020f59]">
              <StarRating selectedStars={5} />
            </span>
          </p>
          <p className="border-b-2 py-2 text-gray-900 font-light w-full uppercase text-2xl grid grid-cols-3">
            <span className="2xl">Spends enough time</span>
            <span className="2xl w-fit">4.0</span>
            <span className="2xl text-[#020f59]">
              <StarRating selectedStars={4} />
            </span>
          </p>
          <p className="py-2  text-lg">4.9 out of 5 (30 ratings, 2 reviews)</p>
          <p className="py-2  flex gap-2 text-lg">
            <p>
              <StarRating selectedStars={5} />
            </p>
            <p>
              Everyone was efficient and professional. my first visit and I am
              very glad I changed!
            </p>
          </p>
          <p className="py-2 flex gap-2 text-lg">
            <p>
              <StarRating selectedStars={5} />
            </p>
            <p>All were professional and courteous. First visit glad I came!</p>
          </p>
        </div>{" "}
        <p className="font-bold text-lg mt-8">About These Ratings</p>{" "}
        <p className="text-xl font-light my-8">
          The BJC Medical Group (BJCMG) partners with an independent survey
          company, Professional Research Consultants (PRC), to gather feedback
          directly from patients about their experiences. PRC sends electronic
          surveys to BJCMG patients following a medical visit, asking them to
          evaluate different aspects of their care. Once a provider receives at
          least 30 reviews, responses are calculated by our survey vendor and
          posted to the provider's profile using a five-star rating system. Read
          more about our rating system
        </p>
      </article>
    </PageLayout>
  );
};
const processCoordinates = (input1: any[], input2: any): any[] => {
  const coordinatesArray: any[] = [
    ...(input1?.length ? input1.map((item) => item.yextDisplayCoordinate) : []),
    { latitude: input2.latitude, longitude: input2.longitude },
  ];

  return coordinatesArray;
};

export default Professional;
