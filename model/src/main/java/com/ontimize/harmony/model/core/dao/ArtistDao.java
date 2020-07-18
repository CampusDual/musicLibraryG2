package com.ontimize.harmony.model.core.dao;



import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("ArtistDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/ArtistDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class ArtistDao extends OntimizeJdbcDaoSupport {

 public static final String ATTR_ARTIST_ID = "artist_id";
 public static final String ATTR_NAME = "name_artist";
 public static final String ATTR_DESCRIPTION = "description";
 public static final String ATTR_CREATION_YEAR= "creation_year";
 

}