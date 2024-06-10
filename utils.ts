const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement | null;
const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement | null;
const userNameDisplay = document.querySelector('#user') as HTMLElement | null;

import { LoyaltyUser, Permissions } from './enums';
import { Review } from './interfaces'; // Make sure the import path is correct

export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    if (reviewTotalDisplay) {
        const iconDisplay = isLoyalty === LoyaltyUser.GOLD_USER ? '⭐' : '';
        reviewTotalDisplay.innerHTML = `${value} review${makeMultiple(value)} | last reviewed by ${reviewer} ${iconDisplay}`;
    }
}

export function populateUser(isReturning: boolean, userName: string) {
    if (returningUserDisplay) {
        returningUserDisplay.innerHTML = isReturning ? 'back' : '';
    }
    if (userNameDisplay) {
        userNameDisplay.innerHTML = userName;
    }
}

export function showDetails(value: boolean | Permissions, element: HTMLDivElement, price: number) {
    if (value && element) {
        const priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = `${price}/night`;
        element.appendChild(priceDisplay);
    }
}

export function makeMultiple(value: number): string {
    return value > 1 || value === 0 ? 's' : '';
}

export function getTopTwoReviews(reviews: Review[]): Review[] {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
    return sortedReviews.slice(0, 2);
}
