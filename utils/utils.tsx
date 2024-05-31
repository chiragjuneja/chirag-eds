/**
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { useLocation } from "react-router-dom";
import {
  TRAINING_ID_STR,
  TRAINING_INSTANCE_ID_STR,
} from "../almLib/utils/constants";
import { getQueryParamsFromUrl } from "../almLib/utils/global";
import { NOT_FOUND, PRIME_TRAINING } from "../config/config";

export const EMPTY_STRING = "";
export const GUEST = "guest";
export const WIDGETS_IFRAME_ID = "id-immersive-experience-iframe";

export function getCurrentUrl(): string {
  return window.location.href;
}

export function getJsonURL(url: string): string {
  let urlParts = url.split("/");
  const subdomainJsonURL = urlParts.slice(0, urlParts.length - 1).join("/");
  const subdomain = getSubdomainFromURL();

  let jsonURL = subdomain
    ? subdomainJsonURL + "/" + GUEST + "/" + subdomain + ".json"
    : EMPTY_STRING;

  if (jsonURL) {
    //cache the akamai json response to 15mins
    const date = new Date();
    const rounded = new Date(
      Math.round(date.getTime() / 900000) * 900000
    ).getTime();
    jsonURL = jsonURL + `?ts=${rounded}`;

    const queryParams = getQueryParamsFromUrl();
    if (queryParams) {
      (window as any).ALM["ipId"] = queryParams["ipId"];
      (window as any).ALM["groupId"] = queryParams["groupId"];
      (window as any).ALM["accesskey"] = queryParams["accesskey"];
    }
  }
  return jsonURL;
}

export function getSubdomainFromURL(): string {
  let urlParts = window.location.href.split(GUEST + "/");
  if (urlParts.length > 1) {
    let subdomain = urlParts[1].substring(
      0,
      urlParts[1].indexOf("/") > -1
        ? urlParts[1].indexOf("/")
        : urlParts[1].length
    );
    return subdomain.indexOf("?") !== -1
      ? subdomain.substring(0, subdomain.indexOf("?"))
      : subdomain;
  }
  return EMPTY_STRING;
}

export function getHostFromURL(): string {
  return window.location.host;
}

export function getOriginFromURL(url: string): string {
  return url.split("/")[0];
}

export function IsRoutePresent(): boolean {
  const location = useLocation();
  return location.pathname !== NOT_FOUND;
}

export function isNotNullOrEmpty(value: string): boolean {
  return value !== null && value !== undefined && value !== "";
}

export function scrollToTop() {
  window.scrollTo(0, 0);
}

export function addQueryParamsToUrl(url: string, key: string, value: string) {
  const newUrl = new URL(url);
  newUrl.searchParams.set(key, value);
  return newUrl.toString();
}

export function openInNewWindow(url: string) {
  window.open(url, "_blank");
}

export function isEmpty(value: string) {
  return !value || value === "";
}

export function getTrainingUrl(trainingId: string, trainingInstanceId: string) {
  let url = PRIME_TRAINING.replace(`:${TRAINING_ID_STR}`, trainingId);
  url = isEmpty(trainingInstanceId)
    ? url.split(`/${TRAINING_INSTANCE_ID_STR}`)[0]
    : url.replace(`:${TRAINING_INSTANCE_ID_STR}`, trainingInstanceId);
  return url;
}
