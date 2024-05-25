import React from "react";
import ProfileImage from "./profile-image";
import type { UserProfile } from "@/lib/types";
import { getProfiles } from "@/lib/getProfiles";


function getInitials(firstName: string, lastName: string): string {
  return `${firstName[0]}${lastName[0]}`;
}

const Card: React.FC<{ profile: UserProfile; skills: string[] }> = ({
  profile,
  skills,
}) => (
  <li
    className="group relative flex cursor-pointer gap-x-2 rounded-2xl border p-5 hover:border-[#5f22d9]/90 hover:shadow-sm bg-white"
    style={{ opacity: 1 }}
  >
    <div className="relative w-full">
      <div className="h-full w-full gap-x-4 transition-all duration-300">
        <section className="flex h-full flex-col justify-between gap-3">
          <section className="flex flex-col gap-3">
            <div className="flex">
              <div className="flex max-w-full flex-1 items-center">
                <div className="flex flex-1 items-center gap-2 truncate">
                  <span className="relative inline-block flex-none overflow-hidden border border-gray-300 rounded-xl bg-white h-12 min-w-12 max-w-12 w-12">
                    <ProfileImage
                      imageUrl={profile["Picture Url Copy"]}
                      initials={getInitials(
                        profile["First Name"],
                        profile["Last Name"]
                      )}
                    />
                  </span>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center truncate">
                        <div className="flex flex-col">
                          <span className="text-base font-medium text-gray-900">
                            {getInitials(
                              profile["First Name"],
                              profile["Last Name"]
                            )}
                          </span>
                        </div>
                        <div className="ml-2 flex flex-col border-l border-l-gray-700 pl-2">
                          <span className="text-base font-medium text-gray-900">
                            {profile.Discipline}
                          </span>
                        </div>
                        <div className="ml-2 flex flex-col border-l border-l-gray-700 pl-2">
                          <span className="text-base font-medium text-gray-900">
                            {profile["Location Name"]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative ml-2 flex w-fit flex-none overflow-hidden whitespace-nowrap rounded-xl bg-[#5f22d9] px-2 py-1.5 text-left text-sm font-semibold text-white shadow-none outline-none ring-0 transition-all focus:border-none focus:outline-none disabled:border disabled:border-[#5f22d9] disabled:bg-transparent disabled:text-transparent md:w-[105px] md:px-3 md:py-2 md:group-hover:w-[120px]">
                  <span className="hidden md:inline-block">
                    View profile&nbsp;&nbsp;
                  </span>
                  <span className="transition-all group-hover:ml-0 md:ml-2">
                    {" "}
                    →
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-0 min-h-[10px] whitespace-pre-wrap text-sm text-gray-600 space-y-2">
              {profile.Summary && <p className="font-semibold">{profile.Summary}</p>}
              {profile["Summary - Experience"] && <p className="italic">{profile["Summary - Experience"].replace(/<br>/g, '\n')}</p>}
              {profile.Headline && <p className="underline">{profile.Headline}</p>}
              {profile["Interested in..."] && <p className="text-gray-500">{profile["Interested in..."]}</p>}
            </div>
          </section>
          <section className="flex items-start justify-between">
            <section className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Expert in</span>
              </div>
              <div className="flex max-h-[30px] w-full flex-wrap items-center gap-2 overflow-hidden">
                {skills.length > 0 ? (
                  skills.map((skill: string) => (
                    <span
                      key={skill}
                      className="inline-flex select-none items-center gap-x-2 whitespace-nowrap rounded-xl bg-[#5f22d9]/10 px-2 py-1.5 text-xs font-normal text-[#5f22d9]"
                    >
                      <span>{skill}</span>
                    </span>
                  ))
                ) : (
                  <span className="text-xs font-normal text-gray-700">
                    No skills found
                  </span>
                )}
              </div>
            </section>
            <section className="flex flex-col justify-end gap-2">
              <h3 className="truncate text-right text-sm font-medium tracking-tight">
                Laid off from:
              </h3>
              <div className="flex items-center justify-end gap-2">
                <span className="inline-flex select-none items-center gap-x-2 whitespace-nowrap rounded-xl bg-gray-100 px-2 py-1.5 text-xs font-normal text-black">
                  {profile.Company}
                </span>
              </div>
            </section>
          </section>
        </section>
      </div>
    </div>
  </li>
);

const ProfileCardsWithSuspense: React.FC<{ profiles: UserProfile[] }> = ({
  profiles,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {profiles && profiles.map((profile: UserProfile) => (
        profile && (
          <Card
            key={profile.Slug}
            profile={profile}
            skills={Array.isArray(profile["Cleaned Skills"]) ? profile["Cleaned Skills"] : []}
          />
        )
      ))}
    </div>
  );
};

const ProfileCards: React.FC<{ searchQuery: string }> = async ({
  searchQuery,
}) => {
  const profileData = await getProfiles(searchQuery);
  const unparsedProfiles = profileData.payload[0];

  const profiles = unparsedProfiles.map((profile: any) => {
    try {
      const parsedProfile = JSON.parse(profile.full_json);
      return parsedProfile;
    } catch (error) {
      console.error("Error parsing profile JSON:", error, "full_json:", profile.full_json);
      return null;
    }
  });

  return <>
  {JSON.stringify(profiles)}
  </>

  // return <ProfileCardsWithSuspense profiles={profiles} />;
};

export default ProfileCards;
