/**
 * API Route for Unsubscribe
 * Handles unsubscribe requests via POST with token
 */

import { NextRequest, NextResponse } from 'next/server';
import { unsubscribeByToken } from '@/db/queries';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { token } = body;

    if (!token) {
      return NextResponse.json(
        { error: 'Token is required' },
        { status: 400 }
      );
    }

    // Attempt to unsubscribe
    const success = await unsubscribeByToken(token);

    if (success) {
      return NextResponse.json(
        { message: 'Successfully unsubscribed' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Invalid or already used token' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error in unsubscribe API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
