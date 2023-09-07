import { createEvent, createStore } from 'effector';

export const $loginModal = createStore<boolean>(false);
export const $regModal = createStore<boolean>(false);
export const $resultModal = createStore<boolean>(false);

export const toggleLoginModal = createEvent();
export const toggleRegModal = createEvent();
export const toggleResultModal = createEvent();

$loginModal.on(toggleLoginModal, (state) => !state);
$regModal.on(toggleRegModal, (state) => !state);
$resultModal.on(toggleResultModal, (state) => !state);
