export class ContentRegister {
  alias_register?: string;
  url_normal_user?: string;
  url_manager_fb_user?: string;
  title?: string;
  description?: string;
  thumbnail?: string;
  type: string = "article";

  constructor() {}
}

export class RegisterDomain {
  type: string = "FACEBOOK";
  source_page: string = "https://ulink.asia";
  url_original?: string;
  setting_advanced: boolean = false;
  content: ContentRegister = new ContentRegister();

  constructor() {}
}
