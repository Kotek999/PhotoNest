import {
  personalDataImg,
  useOfDataImg,
  dataSecurityImg,
  cookiesImg,
  userRightsImg,
  contactImg,
  changesImg,
  generalProvisionsImg,
  registrationImg,
  uploadingPhotosImg,
  colightImg,
  conductImg,
  finalProvisionsImg,
} from "../../../helpers/imageRequirements";
import { SettingsOptionsData } from "../../../types";

export const settingsOptionsData: SettingsOptionsData = [
  {
    title: "User Information",
    iconName: "info-circle",
  },
  {
    title: "Regulations",
    iconName: "pen-nib",
    content: [
      {
        id: 1,
        image: generalProvisionsImg,
        subTitle: "General Provisions",
        isAllSubSectionsExist: true,
        subSections: {
          first:
            "This document outlines the terms of use for the Photo Application (hereinafter referred to as the 'Application').",
          second:
            "By using the Application, the User agrees to abide by the terms outlined in this document.",
          third:
            "The administrator of the Application is PhotoNest, with its registered office at Anonymous.",
        },
      },
      {
        id: 2,
        image: registrationImg,
        subTitle: "Registration",
        isAllSubSectionsExist: true,
        subSections: {
          first: "Use of the Application requires registration.",
          second:
            "The User is solely responsible for maintaining the confidentiality of their account and for all activities carried out through it.",
          third:
            "Each individual registered in the Application may have only one account.",
        },
      },
      {
        id: 3,
        image: uploadingPhotosImg,
        subTitle: "Uploading Photos",
        isAllSubSectionsExist: true,
        subSections: {
          first: "Users may upload their own photos to the Application.",
          second:
            "Photos uploaded by Users must not infringe upon the copyrights of others.",
          third:
            "The administration reserves the right to remove photos that violate the law or contain offensive, vulgar, or otherwise inappropriate content.",
        },
      },
      {
        id: 4,
        image: colightImg,
        subTitle: "Colights",
        isAllSubSectionsExist: false,
        subSections: {
          first:
            "Users may express their appreciation by liking photos uploaded by other users.",
          second:
            "Engaging in artificial, inauthentic actions to manipulate the like system is strictly prohibited.",
        },
      },
      {
        id: 5,
        image: conductImg,
        subTitle: "Code of Conduct",
        isAllSubSectionsExist: true,
        subSections: {
          first:
            "Users are expected to conduct themselves with personal courtesy in their interactions with other users.",
          second:
            "Any content that is offensive, vulgar, or promotes violence is strictly prohibited.",
          third:
            "The administration reserves the right to block or delete the account of any User who violates the provisions of this Terms of Service.",
        },
      },
      {
        id: 6,
        image: changesImg,
        subTitle: "Changes to the Terms of Service",
        isAllSubSectionsExist: false,
        subSections: {
          first:
            "The administration reserves the right to amend this Terms of Service.",
          second:
            "Users will be notified of changes to the Terms of Service through a message in the Application or via electronic means.",
        },
      },
      {
        id: 7,
        image: finalProvisionsImg,
        subTitle: "Final Provisions",
        isAllSubSectionsExist: true,
        subSections: {
          first:
            "This Terms of Service comes into effect upon the release of the Application.",
          second:
            "Any disputes arising from this Terms of Service will be resolved through amicable negotiations, and in case of failure to reach an agreement - by the court having jurisdiction over the administration's registered office.",
          third:
            "Any comments or concerns regarding the operation of the Application should be addressed to anonymous@...com.",
        },
      },
    ],
  },
  {
    title: "Privacy Policy",
    iconName: "lock",
    content: [
      {
        id: 1,
        image: personalDataImg,
        subTitle: "Personal Data",
        isAllSubSectionsExist: false,
        subSections: {
          first:
            "The Application collects the following personal data of Users: Email address (for registration and communication with the User), User profile-related data such as username and profile picture, Information about User activities within the Application, such as uploading photos and giving colights.",
          second: "",
        },
      },
      {
        id: 2,
        image: useOfDataImg,
        subTitle: "Use of Data",
        isAllSubSectionsExist: false,
        subSections: {
          first:
            "The personal data of Users is used to provide services within the Application, including registration, personalization of user experience, and communication with Users.",
          second:
            "Data collected by the Application is not shared with third parties without the explicit consent of the User, unless necessary to perform the provided services or in accordance with applicable law.",
        },
      },
      {
        id: 3,
        image: dataSecurityImg,
        subTitle: "Data Security",
        isAllSubSectionsExist: false,
        subSections: {
          first:
            "The Application implements appropriate technical and organizational measures to ensure the security of Users' personal data against unauthorized access, loss, or unauthorized disclosure.",
          second:
            "User passwords are stored in encrypted form, and access to personal data is limited only to authorized employees or third parties who are required to maintain confidentiality.",
        },
      },
      {
        id: 4,
        image: cookiesImg,
        subTitle: "Cookies",
        isAllSubSectionsExist: false,
        subSections: {
          first:
            "The Application may use cookies to track user activity and customize content to their preferences.",
          second:
            "Users have the option to manage cookie settings in their web browser, including blocking them entirely or deleting existing cookies.",
        },
      },
      {
        id: 5,
        image: userRightsImg,
        subTitle: "User Rights",
        isAllSubSectionsExist: false,
        subSections: {
          first:
            "Users have the right to access their personal data, correct, delete, or restrict processing.",
          second:
            "The User may unsubscribe from receiving marketing communications or inquiries about their personal data at any time.",
        },
      },
      {
        id: 6,
        image: contactImg,
        subTitle: "Contact",
        isAllSubSectionsExist: false,
        subSections: {
          first:
            "Any questions regarding the Privacy Policy should be directed to anonymous@...com.",
          second: "",
        },
      },
      {
        id: 7,
        image: changesImg,
        subTitle: "Changes to the Privacy Policy",
        isAllSubSectionsExist: false,
        subSections: {
          first:
            "The Application reserves the right to change the Privacy Policy.",
          second:
            "Users will be notified of changes to the Privacy Policy through a message in the Application or via electronic means.",
        },
      },
    ],
  },
  {
    title: "About the app",
    iconName: "book-open",
  },
];
