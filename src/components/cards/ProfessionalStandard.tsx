import { MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { BsCheckCircle } from "react-icons/bs";
import {
  Address,
  AddressType,
  getDirections,
  HoursStatus,
  Image,
} from "@yext/pages-components";
import { CardProps } from "@yext/search-ui-react";
import Cta from "../cta";
import { format_phone } from "../../utils/reusableFunctions";
import ResponseComponent from "../ResponseComponent";
import StarRating from "../StarRating";

const ProfessionalStandard = ({ result }: CardProps<any>) => {
  const { name, index, distance } = result;
  const {
    id,
    description,
    headshot,
    mainPhone,
    hours,
    landingPageUrl,
    address,
    timezone,
    c_primaryCTA,
    c_secondaryCTA,
    slug,
    c_location,
    taxonomy_relatedSpecialties,
    acceptingNewPatients,
    c_cRating,
    c_noOfVotes,
  } = result.rawData;
  console.log(JSON.stringify(c_noOfVotes));
  console.log(JSON.stringify(c_location));

  return (
    <article className="border rounded-xl shadow-md flex justify-between  pr-4 text-[#212529] bg-slate-100">
      <section className="px-2 space-y-1 ml-4 flex-1 mt-4">
        <header className="flex justify-start items-center">
          <a
            id={`location-${id}`}
            target="_blank"
            href={slug}
            className="font-semibold text-orange flex items-center space-x-2 standardTitle"
            rel="noreferrer"
          >
            <h2 className="text-xl md:text-3xl">{name}</h2>
          </a>
          <div className="flex items-center ml-4 -mt-2">
            <p className="text-xl md:text-2xl text-[#1700ff]">
              <StarRating selectedStars={c_cRating} />
              <span className="ml-2">
                {c_cRating} ({c_noOfVotes})
              </span>
            </p>
          </div>
          {distance && (
            <span className="standardSubTitle italic ml-auto whitespace-nowrap">
              {(distance! / 1609.344).toFixed(2)} mi
            </span>
          )}
        </header>

        <section className="flex flex-col justify-between  gap-8 pb-2">
          <div>
            <div className="flex items-start md:justify-start gap-8 py-4 flex-col md:flex-row">
              <header className="relative flex flex-col md:w-1/6 w-full">
                <a
                  href={landingPageUrl}
                  className=" group aspect-square block   overflow-hidden rounded-t-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
                >
                  {headshot && (
                    <Image
                      image={headshot!}
                      className="pointer-events-none object-cover group-hover:opacity-75 !h-full !w-full !max-w-none !object-top"
                    />
                  )}
                </a>
              </header>
              <div>
                {hours ? (
                  <HoursStatus
                    timezone={timezone}
                    hours={hours}
                    className="md:text-lg font-medium"
                  />
                ) : (
                  <p></p>
                )}
                {taxonomy_relatedSpecialties && (
                  <div className="flex gap-2 my-4 ">
                    {taxonomy_relatedSpecialties.map(
                      (item: any, index: number) => (
                        <div
                          className="px-4 py-1 text-sm rounded-full bg-white border border-[#212529]"
                          key={index}
                        >
                          {item.name}
                        </div>
                      )
                    )}
                  </div>
                )}
                {address && (
                  <address className="flex  justify-start font-medium leading-loose items-start   text-secondary not-italic">
                    <MapPinIcon className="h-4 w-4 mt-2" />
                    <span className="ml-2">
                      {address.line1}, {address.city}, {address.region} -{" "}
                      {address.postalCode}
                    </span>{" "}
                    <a className="ml-2" href={getDirections(address)}>
                      (See Map)
                    </a>
                  </address>
                )}
                {mainPhone && (
                  <section className="flex  justify-start font-medium leading-loose items-center   text-secondary">
                    <PhoneIcon className="h-4 w-4" />
                    <span className="ml-2">
                      <a href={`tel:${mainPhone}`}>{format_phone(mainPhone)}</a>
                    </span>
                  </section>
                )}
                {c_location && (
                  <div className="flex flex-col">
                    <h3 className="text">
                      Additional Practice Locations ({c_location.length})
                    </h3>
                    {c_location.map((item: any, index: number) => {
                      const { address, mainPhone } = item;
                      return (
                        <article className="" key={index}>
                          <address className="flex  justify-start font-medium leading-loose items-start   text-secondary not-italic">
                            <MapPinIcon className="h-4 w-4 mt-2" />
                            <span className="ml-2">
                              {address.line1}, {address.city}, {address.region}{" "}
                              - {address.postalCode}
                            </span>{" "}
                            <a className="ml-2" href={getDirections(address)}>
                              (See Map)
                            </a>
                          </address>
                          {mainPhone && (
                            <section className="flex  justify-start font-medium leading-loose items-center   text-secondary">
                              <PhoneIcon className="h-4 w-4" />
                              <span className="ml-2">
                                <a href={`tel:${mainPhone}`}>
                                  {format_phone(mainPhone)}
                                </a>
                              </span>
                            </section>
                          )}
                        </article>
                      );
                    })}
                  </div>
                )}
                {acceptingNewPatients && (
                  <span className="flex gap-2 items-center px-4 py-1 rounded-full bg-green-100 w-fit">
                    <BsCheckCircle className="h-5 w-5" /> Accepting New Patients{" "}
                  </span>
                )}
              </div>
              <footer className="hidden md:flex  flex-col gap-4 justify-center pt-4 pb-2 items-center uppercase mb-auto ml-auto">
                {c_secondaryCTA && (
                  <Cta cta={c_secondaryCTA} ctaType="primaryCta" />
                )}
                {c_primaryCTA && (
                  <Cta cta={c_primaryCTA} ctaType="secondaryCta" />
                )}
              </footer>
            </div>
            {description && (
              <ResponseComponent response={description} showMore={true} />
            )}
            <footer className="flex flex-col md:hidden  gap-2 justify-center pt-4 pb-2 items-center uppercase mb-auto">
              {c_secondaryCTA && (
                <Cta cta={c_secondaryCTA} ctaType="primaryCta" />
              )}
              {c_primaryCTA && (
                <Cta cta={c_primaryCTA} ctaType="secondaryCta" />
              )}
            </footer>
          </div>
        </section>
      </section>
    </article>
  );
};

export default ProfessionalStandard;
