import * as errors from "./errors";
import Authentication from "./Authentication";
import Config from "./APIConfig";


export default class ProjectAPI {
  static async getComponents() {
    const res = await fetch(`${Config.base_url}/project`, {
      method: "GET",
      headers: Authentication.withoutJWT()
    });

    if (!res.ok) {
      throw new errors.UnexpectedError();
    }
    const json = await res.json();
    return json.components;
  }

  static async createMilestone(props) {
    if (!Authentication.loggedIn()) return;
    const res = await fetch(
      `${Config.base_url}/milestones/create`,
      {
        method: "POST",
        headers: Authentication.withJWT(),
        body: JSON.stringify(props)
      }
    );
    if (res.ok) {
      const json = await res.json();
      return json.generationSuccess;
    } else {
      throw new errors.UnexpectedError();
    }
  }

  static async createTask(props) {
    if (!Authentication.loggedIn()) return;
    const res = await fetch(
      `${Config.base_url}/tasks/create`,
      {
        method: "POST",
        headers: Authentication.withJWT(),
        body: JSON.stringify(props)
      }
    );
    if (res.ok) {
      const json = await res.json();
      return json.generationSuccess;
    } else {
      throw new errors.UnexpectedError();
    }
  }

  static async markTaskComplete(props) {
    if (!Authentication.loggedIn()) return;
    const res = await fetch(
      `${Config.base_url}/tasks/complete`,
      {
        method: "POST",
        headers: Authentication.withJWT(),
        body: JSON.stringify(props)
      }
    );
    if (res.ok) {
      const json = await res.json();
      return json.generationSuccess;
    } else {
      throw new errors.UnexpectedError();
    }
  }

  static async editMilestone(props) {
    if (!Authentication.loggedIn()) return;
    const res = await fetch(
      `${Config.base_url}/milestones/update`,
      {
        method: "POST",
        headers: Authentication.withJWT(),
        body: JSON.stringify(props)
      }
    );
    if (res.ok) {
      const json = await res.json();
      return json.generationSuccess;
    } else {
      throw new errors.UnexpectedError();
    }
  }

  static async markMilestoneComplete(props) {
    if (!Authentication.loggedIn()) return;
    const res = await fetch(
      `${Config.base_url}/milestones/complete`,
      {
        method: "POST",
        headers: Authentication.withJWT(),
        body: JSON.stringify(props)
      }
    );
    if (res.ok) {
      const json = await res.json();
      return json.generationSuccess;
    } else {
      throw new errors.UnexpectedError();
    }
  }

  static async deleteMilestone(props) {
    if (!Authentication.loggedIn()) return;
    const res = await fetch(
      `${Config.base_url}/milestones/delete`,
      {
        method: "POST",
        headers: Authentication.withJWT(),
        body: JSON.stringify(props)
      }
    );
    if (res.ok) {
      const json = await res.json();
      return json.generationSuccess;
    } else {
      throw new errors.UnexpectedError();
    }
  }

  static async createComponent(props) {
    if (!Authentication.loggedIn()) return;
    const res = await fetch(
      `${Config.base_url}/components/create`,
      {
        method: "POST",
        headers: Authentication.withJWT(),
        body: JSON.stringify(props)
      }
    );
    if (res.ok) {
      const json = await res.json();
      return json.generationSuccess;
    } else {
      throw new errors.UnexpectedError();
    }
  }

  static async updateComponent(props) {
    if (!Authentication.loggedIn()) return;
    const res = await fetch(
      `${Config.base_url}/components/update`,
      {
        method: "POST",
        headers: Authentication.withJWT(),
        body: JSON.stringify(props)
      }
    );
    if (res.ok) {
      const json = await res.json();
      return json.generationSuccess;
    } else {
      throw new errors.UnexpectedError();
    }
  }

  static async deleteComponent(props) {
    if (!Authentication.loggedIn()) return;
    const res = await fetch(
      `${Config.base_url}/components/delete`,
      {
        method: "POST",
        headers: Authentication.withJWT(),
        body: JSON.stringify(props)
      }
    );
    if (res.ok) {
      const json = await res.json();
      return json.generationSuccess;
    } else {
      throw new errors.UnexpectedError();
    }
  }
}
