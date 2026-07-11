import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const application = await prisma.application.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
        country: body.country,
        city: body.city,

        creatorHandle: body.creatorHandle,
        contentNiche: body.contentNiche,

        primaryPlatforms: body.primaryPlatforms,

        followersRange: body.followersRange,
        averageViews: body.averageViews,

        primaryProfileLink: body.primaryProfileLink,
        otherSocialLinks: body.otherSocialLinks,

        interestedIn: body.interestedIn,

        about: body.about,
        previousExperience: body.previousExperience,

        heardFrom: body.heardFrom,

        acceptedTerms: body.acceptedTerms,
        mediaConsent: body.mediaConsent,
        newsletter: body.newsletter,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully.",
        application,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}