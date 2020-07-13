package com.ontimize.harmony.model.core.dao;



import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("PlaylistDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/PlaylistDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class PlaylistDao extends OntimizeJdbcDaoSupport {

 public static final String ATTR_PLAYLIST_ID = "playlist_id";
 public static final String ATTR_NAME = "name";
 public static final String ATTR_DESCRIPTION= "description";
 public static final String ATTR_CREATION_DATE = "creation_date";
 public static final String ATTR_USER_ID = "user_id";
 

}