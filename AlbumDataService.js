import http from "../http-common";

class AlbumDataService {
  getAll(params) {
    return http.get("/tutorials", { params });
  }

  get(id) {
    return http.get(`/tutorials/${id}`);
  }
  getart(id) {
    return http.get(`/artisttutorials/${id}`);
  }
  create(data) {
    return http.post("/tutorials", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }
}
export default new AlbumDataService();