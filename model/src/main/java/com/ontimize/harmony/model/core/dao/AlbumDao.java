package com.ontimize.harmony.model.core.dao;



import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("AlbumDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/AlbumDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class AlbumDao extends OntimizeJdbcDaoSupport {

 public static final String ATTR_ALBUM_ID = "album_id";
 public static final String ATTR_TITLE = "title";
 public static final String ATTR_RELEASE_YEAR= "release_year";
 public static final String ATTR_SUBGENRE_ID = "subgenre_id";
 public static final String ATTR_ARTIST_ID = "artist_id";
 public static final String ATTR_CREATION_DATE = "creation_date";
 public static final String ATTR_IMAGE_PATH = "image_path";

}