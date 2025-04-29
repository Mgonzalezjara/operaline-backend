import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutCompanyInfo extends Struct.ComponentSchema {
  collectionName: 'components_layout_company_infos';
  info: {
    description: '';
    displayName: 'Company Info';
    icon: 'globe';
  };
  attributes: {
    address: Schema.Attribute.String;
    email: Schema.Attribute.String;
    facebook: Schema.Attribute.String;
    fax: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    post_code: Schema.Attribute.String;
    website: Schema.Attribute.String;
  };
}

export interface LayoutNavigation extends Struct.ComponentSchema {
  collectionName: 'components_layout_navigations';
  info: {
    description: '';
    displayName: 'Navigation';
    icon: 'bulletList';
  };
  attributes: {
    navigation_item: Schema.Attribute.String;
    URL: Schema.Attribute.String;
  };
}

export interface SingerBiography extends Struct.ComponentSchema {
  collectionName: 'components_singer_biographies';
  info: {
    description: '';
    displayName: 'Biography';
    icon: 'book';
  };
  attributes: {
    biography_text: Schema.Attribute.Blocks;
    language: Schema.Attribute.Relation<'oneToOne', 'api::language.language'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.company-info': LayoutCompanyInfo;
      'layout.navigation': LayoutNavigation;
      'singer.biography': SingerBiography;
    }
  }
}
