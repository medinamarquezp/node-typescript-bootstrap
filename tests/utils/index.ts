import apiInterface from "@/src/interfaces/api";
import request from "supertest";

export const api = request(apiInterface);
